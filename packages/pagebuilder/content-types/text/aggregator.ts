import type { HTMLElement } from 'node-html-parser';
import type { TextContentType } from './types';

export const textAggregator: TextContentType['configAggregator'] = (
  node: HTMLElement
) => ({
  content: node.innerText
});
