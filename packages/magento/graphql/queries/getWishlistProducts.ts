import { graphql } from '../generated/gql';

export const GetWishlistProducts = graphql(`
  query GetWishlistProducts {
    customer {
      wishlists {
        id
        ...WishlistList
      }
    }
  }
`);
