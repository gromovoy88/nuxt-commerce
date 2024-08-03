import { graphql } from '../generated/gql';

export const ProductListItemBundle = graphql(`
  fragment ProductListItemBundle on BundleProduct {
    uid
    sku
    dynamic_sku
    dynamic_price
    dynamic_weight
    price_view
    ship_bundle_items
    items {
      uid
      option_id
      title
      type
      required
      position
      options {
        uid
        id
        label
        quantity
        can_change_quantity
        price
        price_type
        is_default
        position
        product {
          id
          name
          sku
          stock_status
        }
      }
    }
  }
`);
