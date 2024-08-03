import type { ContentType, ContentTypeConfig } from '../../types/content.types';

export type ColumnGroupConfig = ContentTypeConfig;

export type ColumnGroupProps = {};

export type ColumnGroupContentType = ContentType<
  ColumnGroupConfig,
  ColumnGroupProps
>;
