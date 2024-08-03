import type { ContentType, ContentTypeConfig } from '../../types/content.types';

export type TextConfig = ContentTypeConfig;

export type TextProps = { content: string };

export type TextContentType = ContentType<TextConfig, TextProps>;
