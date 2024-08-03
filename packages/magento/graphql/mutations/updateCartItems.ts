import { graphql } from '../generated/gql';

export const UpdateCartItems = graphql(/* GraphQL */ `
  mutation UpdateCartItems(
    $cartId: String!
    $cartItems: [CartItemUpdateInput]!
  ) {
    updateCartItems(input: { cart_id: $cartId, cart_items: $cartItems }) {
      cart {
        ...CartData
      }
    }
  }
`);
