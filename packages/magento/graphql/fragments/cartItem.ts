import { graphql } from '../generated/gql';

export const CartItem = graphql(`
  fragment CartItem on CartItemInterface {
    quantity
    uid
    product {
      ...ProductListItem
    }
    prices {
      price {
        ...Money
      }
    }
  }
`);
