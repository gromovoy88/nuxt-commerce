import { graphql } from '../generated/gql';

export const WishlistItem = graphql(`
  fragment WishlistItem on WishlistItemInterface {
    id
    product {
      __typename
      uid
      sku
      ...ProductListItem
    }
  }
`);
