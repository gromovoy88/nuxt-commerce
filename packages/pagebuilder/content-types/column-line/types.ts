import type { ContentType, ContentTypeConfig } from '../../types/content.types';

export type ColumnLineConfig = ContentTypeConfig;

export type ColumnLineProps = { content: { columns: number } };

export type ColumnLineContentType = ContentType<
  ColumnLineConfig,
  ColumnLineProps
>;
