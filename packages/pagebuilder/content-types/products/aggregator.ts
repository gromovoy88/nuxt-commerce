import type { HTMLElement } from 'node-html-parser';
import type { ProductsContentType } from './types';

export const parseChildren = (node: HTMLElement): string[] => {
  const forms = node.querySelectorAll(
    '.product-item-details > .product-item-name > a.product-item-link'
  );

  return [...forms]
    .map((form) => form.getAttribute('href') ?? null)
    .filter((s): s is string => Boolean(s));
};

export const productsAggregator: ProductsContentType['configAggregator'] = (
  node: HTMLElement
) => ({
  pathNames: parseChildren(node)
});
