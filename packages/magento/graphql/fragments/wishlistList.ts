import { graphql } from '../generated/gql';

export const WishlistList = graphql(`
  fragment WishlistList on Wishlist {
    id
    items_count
    items_v2 {
      items {
        id
        ...WishlistItem
      }
    }
  }
`);
