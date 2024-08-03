import { graphql } from '../generated/gql';

export const AddProductsToCart = graphql(/* GraphQL */ `
  mutation AddProductsToCart($cartId: String!, $cartItems: [CartItemInput!]!) {
    addProductsToCart(cartId: $cartId, cartItems: $cartItems) {
      cart {
        ...CartData
      }
    }
  }
`);
