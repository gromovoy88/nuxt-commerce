import { graphql } from '../generated/gql';

export const GetRoute = graphql(`
  query GetRoute($url: String!) {
    route(url: $url) {
      ...RouteData
      ...RouteProductData
      ...RouteCategoryData
      ...RouteCmsPageData
    }
  }
`);
