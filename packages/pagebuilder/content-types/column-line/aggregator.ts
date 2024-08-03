import type { HTMLElement } from 'node-html-parser';
import type { ColumnLineContentType } from './types';

const getColumnsData = (node: HTMLElement) => {
  return {
    columns: node.childNodes.length
  };
};

export const columnLineAggregator: ColumnLineContentType['configAggregator'] = (
  node: HTMLElement
) => ({
  content: getColumnsData(node)
});
