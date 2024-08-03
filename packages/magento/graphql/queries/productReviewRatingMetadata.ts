import { graphql } from '../generated/gql';

export const ProductReviewRatingMetadata = graphql(`
  query ProductReviewRatingsMetadata {
    productReviewRatingsMetadata {
      items {
        id
        name
        values {
          value
          value_id
        }
      }
    }
  }
`);
