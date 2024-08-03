import { graphql } from '../generated/gql';

export const AddProductToWishlist = graphql(`
  mutation AddProductToWishlist($input: [WishlistItemInput!]!) {
    addProductsToWishlist(wishlistId: 0, wishlistItems: $input) {
      wishlist {
        ...WishlistList
      }
    }
  }
`);
