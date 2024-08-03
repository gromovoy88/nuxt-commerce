import { graphql } from '../generated/gql';

export const ProductListOnBundle = graphql(`
  query ProductListOnBundle(
    $pageSize: Int = 1
    $currentPage: Int = 1
    $filters: ProductAttributeFilterInput = {}
  ) {
    products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters) {
      ...ProductListItemsBundle
    }
  }
`);
