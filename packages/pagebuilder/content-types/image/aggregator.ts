import type { HTMLElement } from 'node-html-parser';
import type { ImageContentType } from './types';

const getImageData = (imageNode: HTMLElement) => {
  const imageEl = imageNode.querySelector('img');

  if (!imageEl) {
    return null;
  }

  return {
    src: imageEl.getAttribute('src') ?? ''
  };
};

export const imageAggregator: ImageContentType['configAggregator'] = (
  node: HTMLElement
) => ({ content: getImageData(node) });
