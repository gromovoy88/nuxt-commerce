import { parse } from 'node-html-parser';
import type { HTMLElement, Node } from 'node-html-parser';
import type { ContentTypeConfig, ContentTypes } from '../types/content.types';
import { type ContentTypeKeys } from './pagebuilder-config';

interface TreeNode {
  node: HTMLElement;
  children: TreeNode[];
}

export function detectPageBuilder(content?: string | null): boolean {
  return !!(content && /data-content-type=/.test(content));
}

export function isHTMLElement(node: HTMLElement): boolean {
  return node.nodeType === 1;
}

const createContentTypeObject = (
  type: string,
  node?: HTMLElement
): ContentTypeConfig => {
  return {
    contentType: type,
    appearance: (node && node?.getAttribute('data-appearance')) || null,
    elements: []
  };
};

// Define a tree walker function that builds a tree structure
function treeWalker(node: HTMLElement, parent: TreeNode | null): TreeNode {
  // Create a new tree node for the current HTML node
  const treeNode: TreeNode = { node, children: [] };

  // If there is a parent, add the current node as its child
  if (parent) {
    parent.children.push(treeNode);
  }

  // Recursively traverse child nodes
  if (node.childNodes) {
    node.childNodes.forEach((childNode: Node) => {
      treeWalker(childNode as HTMLElement, treeNode);
    });
  }

  return treeNode;
}

// Process and parse content for every child node
function processTreeNode(
  { node, children }: TreeNode,
  content: ContentTypeConfig
): void {
  let parentContent: ContentTypeConfig = content;

  if (isHTMLElement(node)) {
    const contentType = node.getAttribute(
      'data-content-type'
    ) as ContentTypeKeys;

    if (contentType) {
      const props = createContentTypeObject(contentType, node);
      parentContent = props;

      const aggregator = getContentType(props.contentType as ContentTypes);

      if (aggregator && typeof aggregator === 'function') {
        try {
          const result = { ...props, ...aggregator(node, props) };

          content.elements.push(result);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(
            `Failed to aggregate config for content type ${props.contentType}.`,
            e
          );
        }
      }
    }
  }

  children.forEach((childNode) => {
    processTreeNode(childNode, parentContent);
  });
}

// Parse the master format storage HTML
export const parseStorageHtml = (html: string) => {
  const document = parse(html);
  const content = createContentTypeObject('root-container');
  const rootTree = treeWalker(document, null);

  processTreeNode(rootTree, content);

  return content;
};
