import type { Component } from 'vue';
import type { HTMLElement } from 'node-html-parser';

export type ContentTypes =
  | 'html'
  | 'products'
  | 'row'
  | 'column'
  | 'column-line'
  | 'column-group'
  | 'image'
  | 'text';

export type ContentTypeConfig<T extends string = string> = {
  contentType: T;
  appearance: string | null;
  elements: ContentTypeConfig[];
};

export type ParseProps<
  Config extends ContentTypeConfig = ContentTypeConfig,
  R extends Record<string, unknown> = Record<string, unknown>
> = (node: HTMLElement, config: Config) => R;

export type ContentType<
  Config extends ContentTypeConfig,
  R extends Record<string, unknown>
> = {
  configAggregator: ParseProps<Config, R>;
  component: Component;
};
