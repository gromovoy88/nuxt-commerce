import { columnGroupAggregator } from '../content-types/column-group/aggregator';
import { columnLineAggregator } from '../content-types/column-line/aggregator';
import { columnAggregator } from '../content-types/column/aggregator';
import { htmlAggregator } from '../content-types/html/aggregator';
import { imageAggregator } from '../content-types/image/aggregator';
import { productsAggregator } from '../content-types/products/aggregator';
import { rowAggregator } from '../content-types/row/aggregator';
import { textAggregator } from '../content-types/text/aggregator';
import type { ContentTypes } from '../types/content.types';

export function getPagebuilderAggregations(): Record<ContentTypes, any> {
  return {
    products: productsAggregator,
    html: htmlAggregator,
    row: rowAggregator,
    column: columnAggregator,
    'column-line': columnLineAggregator,
    'column-group': columnGroupAggregator,
    image: imageAggregator,
    text: textAggregator
  };
}
