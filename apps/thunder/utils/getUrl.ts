import { paths } from './paths';

export function getCategoryUrl(categoryUrlPath: string): string {
  return `${paths.category}/${categoryUrlPath}`;
}

export function getCmsPageUrl(cmsPageUrlPath: string): string {
  return `${paths.content}/${cmsPageUrlPath}`;
}

export function getProductUrl(productUrlPath: string): string {
  return `${paths.product}/${productUrlPath}`;
}
