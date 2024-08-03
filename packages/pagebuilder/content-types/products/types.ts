import type { ContentType, ContentTypeConfig } from '../../types/content.types';

export type ProductsConfig = ContentTypeConfig<'products'>;

export type ProductsProps = {
  pathNames: string[];
};

export type ProductsContentType = ContentType<ProductsConfig, ProductsProps>;
