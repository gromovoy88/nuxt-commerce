import { graphql } from '../generated/gql';

export const GetCmsPage = graphql(`
  query GetCmsPage($identifier: String!) {
    cmsPage(identifier: $identifier) {
      ...CmsPageItem
    }
  }
`);
