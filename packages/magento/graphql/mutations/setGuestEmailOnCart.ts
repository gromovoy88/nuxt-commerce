import { graphql } from '../generated/gql';

export const SetGuestEmailOnCart = graphql(/* GraphQL */ `
  mutation SetGuestEmailOnCart($cartId: String!, $email: String!) {
    setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {
      cart {
        ...CartData
      }
    }
  }
`);
