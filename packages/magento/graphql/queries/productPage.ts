import { graphql } from '../generated/gql';

export const ProductPage = graphql(`
  query ProductPage($urlKey: String!) {
    products(filter: { url_key: { eq: $urlKey } }) {
      items {
        ...ProductPageItem
        ...ProductPagePrice
      }
    }
  }
`);
