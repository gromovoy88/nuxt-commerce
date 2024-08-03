import { graphql } from '../generated/gql';

export const ProductListSort = graphql(`
  fragment ProductListSort on Products {
    sort_fields {
      default
      ...SortFieldOptions
    }
  }
`);
