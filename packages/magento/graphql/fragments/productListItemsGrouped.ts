import { graphql } from '../generated/gql';

export const ProductListItemsGrouped = graphql(`
  fragment ProductListItemsGrouped on Products {
    items {
      uid
      ...ProductListItemGrouped
    }
  }
`);
