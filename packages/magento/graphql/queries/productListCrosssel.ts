import { graphql } from '../generated/gql';

export const ProductListCrosssel = graphql(`
  query ProductListCrosssel($filters: ProductAttributeFilterInput = {}) {
    products(pageSize: 1, currentPage: 1, filter: $filters) {
      items {
        ...CrosssellProducts
      }
    }
  }
`);
