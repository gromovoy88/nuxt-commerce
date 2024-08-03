import { graphql } from '../generated/gql';

export const ProductListFilters = graphql(`
  fragment ProductListFilters on Products {
    aggregations(filter: { category: { includeDirectChildrenOnly: true } }) {
      attribute_code
      ...ProductListFilterItem
    }
  }
`);
