import { graphql } from '../generated/gql';

export const ProductListOnConfigurable = graphql(`
  query ProductListOnConfigurable(
    $pageSize: Int = 1
    $currentPage: Int = 1
    $filters: ProductAttributeFilterInput = {}
  ) {
    products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters) {
      ...ProductListItemsConfigurable
    }
  }
`);
