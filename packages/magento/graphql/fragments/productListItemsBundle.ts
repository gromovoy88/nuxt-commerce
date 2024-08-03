import { graphql } from '../generated/gql';

export const ProductListItemsBundle = graphql(`
  fragment ProductListItemsBundle on Products {
    items {
      uid
      ...ProductListItemBundle
    }
  }
`);
