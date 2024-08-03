import { graphql } from '../generated/gql';

export const GetMegaMenu = graphql(`
  query GetMegaMenu(
    $pageSize: Int = 1
    $currentPage: Int = 1
    $filters: CategoryFilterInput = {}
  ) {
    categories(
      filters: $filters
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      items {
        ...MegaMenuParent
      }
    }
  }
`);
