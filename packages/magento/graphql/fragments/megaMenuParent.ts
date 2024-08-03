import { graphql } from '../generated/gql';

export const MegaMenuParent = graphql(`
  fragment MegaMenuParent on CategoryTree {
    name
    product_count
    uid
    include_in_menu
    children {
      ...MegaMenuItem
    }
  }
`);
