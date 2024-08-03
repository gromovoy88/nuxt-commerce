import { graphql } from '../generated/gql';

export const CmsPageItem = graphql(`
  fragment CmsPageItem on CmsPage {
    identifier
    url_key
    content
    content_heading
    title
    page_layout
    meta_title
    meta_keywords
    meta_description
  }
`);
