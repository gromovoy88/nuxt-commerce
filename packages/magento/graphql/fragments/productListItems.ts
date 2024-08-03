import { graphql } from '../generated/gql';

export const ProductListItems = graphql(`
  fragment ProductListItems on Products {
    items {
      uid
      ...ProductListItem
    }
  }
`);
