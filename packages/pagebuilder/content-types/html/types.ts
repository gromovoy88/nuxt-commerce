import type { ContentType, ContentTypeConfig } from '../../types/content.types';

export type HtmlConfig = ContentTypeConfig;

export type HtmlProps = { content: string };

export type HtmlContentType = ContentType<HtmlConfig, HtmlProps>;
