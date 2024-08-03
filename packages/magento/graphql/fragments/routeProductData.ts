import { graphql } from '../generated/gql';

export const RouteProductData = graphql(`
  fragment RouteProductData on ProductInterface {
    name
    url_key
  }
`);
