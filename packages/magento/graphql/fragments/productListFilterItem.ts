import { graphql } from '../generated/gql';

export const ProductListFilterItem = graphql(`
  fragment ProductListFilterItem on Aggregation {
    label
    attribute_code
    count
    options {
      label
      value
      count
    }
  }
`);
