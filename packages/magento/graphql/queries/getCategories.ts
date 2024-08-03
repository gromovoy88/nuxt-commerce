import { graphql } from '../generated/gql';

export const GetCategories = graphql(`
  query GetCategories($urlPath: String!) {
    categories(
      filters: { url_path: { eq: $urlPath } }
      pageSize: 1
      currentPage: 1
    ) {
      items {
        uid
        name
        ...CategoryItem
      }
    }
  }
`);
