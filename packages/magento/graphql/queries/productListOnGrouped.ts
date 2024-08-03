import { graphql } from '../generated/gql';

export const ProductListOnGrouped = graphql(`
  query ProductListOnGrouped(
    $pageSize: Int = 1
    $currentPage: Int = 1
    $filters: ProductAttributeFilterInput = {}
  ) {
    products(pageSize: $pageSize, currentPage: $currentPage, filter: $filters) {
      ...ProductListItemsGrouped
    }
  }
`);
