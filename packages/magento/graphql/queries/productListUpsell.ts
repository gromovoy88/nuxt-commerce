import { graphql } from '../generated/gql';

export const ProductListUpsell = graphql(`
  query ProductListUpsell($filters: ProductAttributeFilterInput = {}) {
    products(pageSize: 1, currentPage: 1, filter: $filters) {
      items {
        ...UpsellProducts
      }
    }
  }
`);
