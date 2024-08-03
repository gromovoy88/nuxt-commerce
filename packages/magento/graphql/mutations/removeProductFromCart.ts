import { graphql } from '../generated/gql';

export const RemoveItemFromCart = graphql(`
  mutation RemoveItemFromCart($cartId: String!, $cartItemUid: ID) {
    removeItemFromCart(
      input: { cart_id: $cartId, cart_item_uid: $cartItemUid }
    ) {
      cart {
        ...CartData
      }
    }
  }
`);
