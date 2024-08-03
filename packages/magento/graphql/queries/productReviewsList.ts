import { graphql } from '../generated/gql';

export const ProductReviewsList = graphql(`
  query ProductReviewsList(
    $pageSize: Int = 1
    $currentPage: Int = 1
    $filters: ProductAttributeFilterInput = {}
  ) {
    products(pageSize: 1, currentPage: 1, filter: $filters) {
      items {
        name
        reviews(pageSize: $pageSize, currentPage: $currentPage) {
          items {
            ...ReviewsListItem
          }
        }
      }
    }
  }
`);
