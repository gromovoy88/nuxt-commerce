import { graphql } from '../generated/gql';

export const ProductListCount = graphql(`
  fragment ProductListCount on Products {
    total_count
  }
`);
