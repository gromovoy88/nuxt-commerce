import { graphql } from '../generated/gql';

export const RemoveProductFromWishlist = graphql(`
  mutation RemoveProductFromWishlist($wishlistItemId: ID!) {
    removeProductsFromWishlist(
      wishlistId: 0
      wishlistItemsIds: [$wishlistItemId]
    ) {
      wishlist {
        ...WishlistList
      }
    }
  }
`);
