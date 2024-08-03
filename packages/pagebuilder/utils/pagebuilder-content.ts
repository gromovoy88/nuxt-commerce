import type { Component } from 'vue';
import PageBuilderProducts from '../components/PageBuilderProducts.vue';
import PageBuilderHtml from '../components/PageBuilderHtml.vue';
import PageBuilderRow from '../components/PageBuilderRow.vue';
import PageBuilderColumn from '../components/PageBuilderColumn.vue';
import PageBuilderColumnLine from '../components/PageBuilderColumnLine.vue';
import PageBuilderColumnGroup from '../components/PageBuilderColumnGroup.vue';
import PageBuilderText from '../components/PageBuilderText.vue';
import PageBuilderImage from '../components/PageBuilderImage.vue';
import type { ContentTypes } from '../types/content.types';

export function getPagebuilderComponents(): Record<ContentTypes, Component> {
  return {
    products: PageBuilderProducts,
    html: PageBuilderHtml,
    row: PageBuilderRow,
    column: PageBuilderColumn,
    'column-line': PageBuilderColumnLine,
    'column-group': PageBuilderColumnGroup,
    text: PageBuilderText,
    image: PageBuilderImage
  };
}
