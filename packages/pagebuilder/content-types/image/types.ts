import type { ContentType, ContentTypeConfig } from '../../types/content.types';

export type ImageConfig = ContentTypeConfig;

export type ImageProps = { content: { src: string } | null };

export type ImageContentType = ContentType<ImageConfig, ImageProps>;
