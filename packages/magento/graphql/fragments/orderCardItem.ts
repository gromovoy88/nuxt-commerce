import { graphql } from '../generated/gql';

export const OrderCardItem = graphql(`
  fragment OrderCardItem on OrderItemInterface {
    product_name
    product_sku
    product_url_key
    quantity_ordered
    product_sale_price {
      ...Money
    }
  }
`);
