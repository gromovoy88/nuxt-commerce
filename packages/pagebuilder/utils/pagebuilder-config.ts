import type { ParseProps } from '../types/content.types';
import { getPagebuilderAggregations } from './pagebuilder-aggreation';

interface RenderTypes {
  [key: string]: Component;
}

interface ContentTypes {
  [key: string]: ParseProps<any, any>;
}

export const renderTypes: RenderTypes = {
  products: getPagebuilderComponents().products,
  html: getPagebuilderComponents().html,
  row: getPagebuilderComponents().row,
  column: getPagebuilderComponents().column,
  'column-line': getPagebuilderComponents()['column-line'],
  'column-group': getPagebuilderComponents()['column-group'],
  image: getPagebuilderComponents().image,
  text: getPagebuilderComponents().text
};

export const contentTypes: ContentTypes = {
  products: getPagebuilderAggregations().products,
  html: getPagebuilderAggregations().html,
  row: getPagebuilderAggregations().row,
  column: getPagebuilderAggregations().column,
  'column-line': getPagebuilderAggregations()['column-line'],
  'column-group': getPagebuilderAggregations()['column-group'],
  image: getPagebuilderAggregations().image,
  text: getPagebuilderAggregations().text
};

export type ContentTypeKeys = string;

export type RenderTypeKeys = string;

export function getComponentByType(name: RenderTypeKeys | string) {
  return renderTypes[name] ?? null;
}

export function getContentType(name: ContentTypeKeys | string) {
  return contentTypes[name] ?? null;
}
