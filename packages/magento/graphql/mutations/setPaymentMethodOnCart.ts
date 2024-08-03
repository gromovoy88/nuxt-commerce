import { graphql } from '../generated/gql';

export const SetPaymentMethodOnCart = graphql(/* GraphQL */ `
  mutation SetPaymentMethodOnCart($cartId: String!, $paymentCode: String!) {
    setPaymentMethodOnCart(
      input: { cart_id: $cartId, payment_method: { code: $paymentCode } }
    ) {
      cart {
        ...CartData
      }
    }
  }
`);
