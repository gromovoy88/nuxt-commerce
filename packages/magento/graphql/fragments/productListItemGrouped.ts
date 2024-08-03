import { graphql } from '../generated/gql';

export const ProductListItemGrouped = graphql(`
  fragment ProductListItemGrouped on GroupedProduct {
    uid
    ... on GroupedProduct {
      items {
        position
        qty
        product {
          uid
          ...ProductListItem
        }
      }
    }
  }
`);
