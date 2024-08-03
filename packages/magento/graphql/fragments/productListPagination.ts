import { graphql } from '../generated/gql';

export const ProductListPagination = graphql(`
  fragment ProductListPagination on Products {
    total_count
    page_info {
      current_page
      total_pages
    }
  }
`);
