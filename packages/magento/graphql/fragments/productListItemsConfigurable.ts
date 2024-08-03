import { graphql } from '../generated/gql';

export const ProductListItemsConfigurable = graphql(`
  fragment ProductListItemsConfigurable on Products {
    items {
      uid
      ...ProductListItemConfigurable
    }
  }
`);
