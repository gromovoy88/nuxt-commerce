import { graphql } from '../generated/gql';

export const RouteCategoryData = graphql(`
  fragment RouteCategoryData on CategoryInterface {
    url_key
    name
  }
`);
