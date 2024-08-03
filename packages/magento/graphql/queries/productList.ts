import { graphql } from '../generated/gql';

export const ProductList = graphql(`
  query ProductList(
    $pageSize: Int = 24
    $currentPage: Int = 1
    $filters: ProductAttributeFilterInput = {}
    $sort: ProductAttributeSortInput = {}
    $search: String = ""
  ) {
    products(
      pageSize: $pageSize
      currentPage: $currentPage
      filter: $filters
      sort: $sort
      search: $search
    ) {
      ...ProductListFilters
      ...ProductListCount
      ...ProductListPagination
      ...ProductListSort
      ...ProductListItems
    }
  }
`);
