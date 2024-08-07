import { graphql } from '../generated/gql';

export const CreateProductReview = graphql(`
  mutation CreateProductReview(
    $nickname: String!
    $ratings: [ProductReviewRatingInput]!
    $sku: String!
    $summary: String!
    $text: String!
  ) {
    createProductReview(
      input: {
        nickname: $nickname
        ratings: $ratings
        sku: $sku
        summary: $summary
        text: $text
      }
    ) {
      review {
        ...ReviewsListItem
      }
    }
  }
`);
