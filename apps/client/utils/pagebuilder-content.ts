import type { Component } from 'vue';
import type { ContentTypes } from '@thunder/pagebuilder/types/content.types';
import { getPagebuilderComponents as getPagebuilderComponentsOriginal } from '@thunder/pagebuilder/utils/pagebuilder-content';

import PageBuilderProducts from '../components/page-builder/PageBuilderProducts.vue';
import PageBuilderHtml from '../components/page-builder/PageBuilderHtml.vue';

export function getPagebuilderComponents(): Record<ContentTypes, Component> {
  return {
    ...getPagebuilderComponentsOriginal(),
    products: PageBuilderProducts,
    html: PageBuilderHtml
  };
}
