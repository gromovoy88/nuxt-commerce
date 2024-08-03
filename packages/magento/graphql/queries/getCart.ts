import { graphql } from '../generated/gql';

export const GetCart = graphql(`
  query GetCart($cartId: String = "") {
    cart(cart_id: $cartId) {
      id
      ...CartData
    }
  }
`);
