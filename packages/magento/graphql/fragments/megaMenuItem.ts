import { graphql } from '../generated/gql';

export const MegaMenuItem = graphql(`
  fragment MegaMenuItem on CategoryTree {
    name
    path
    url_path
    uid
    position
    include_in_menu
    level
    product_count
    children {
      name
      path
      url_path
      uid
      position
      level
      product_count
      children {
        name
        path
        url_path
        uid
        position
        level
        product_count
      }
    }
  }
`);
