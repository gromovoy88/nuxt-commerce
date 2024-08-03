import { graphql } from '../generated/gql';

export const CategoryItem = graphql(`
  fragment CategoryItem on CategoryTree {
    image
    name
    path
    url_path
    uid
    position
    description
    breadcrumbs {
      category_uid
      category_name
      category_url_path
      category_level
    }
    children {
      image
      name
      path
      url_path
      uid
      position
      description
      breadcrumbs {
        category_uid
        category_name
        category_url_path
        category_level
      }
    }
  }
`);
