import { graphql } from '../generated/gql';

export const ReviewsListItem = graphql(`
  fragment ReviewsListItem on ProductReview {
    average_rating
    summary
    text
    nickname
    created_at
  }
`);
