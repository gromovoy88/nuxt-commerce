import type { HTMLElement } from 'node-html-parser';
import * as NodeHtmlParser from 'node-html-parser';
import type { HtmlContentType } from './types';

export const parseChildren = (node: HTMLElement) => {
  const dom = NodeHtmlParser.parse('<!doctype html><body>' + node.textContent);
  const html = dom.innerHTML;

  return html;
};

export const htmlAggregator: HtmlContentType['configAggregator'] = (
  node: HTMLElement
) => ({
  content: parseChildren(node)
});
