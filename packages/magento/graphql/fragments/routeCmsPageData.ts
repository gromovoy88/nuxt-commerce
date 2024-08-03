import { graphql } from '../generated/gql';

export const RouteCmsPageData = graphql(`
  fragment RouteCmsPageData on CmsPage {
    url_key
    identifier
  }
`);
