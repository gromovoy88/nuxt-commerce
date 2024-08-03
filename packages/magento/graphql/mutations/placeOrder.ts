import { graphql } from '../generated/gql';

export const PlaceOrder = graphql(/* GraphQL */ `
  mutation PlaceOrder($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      order {
        order_id
        order_number
      }
    }
  }
`);
