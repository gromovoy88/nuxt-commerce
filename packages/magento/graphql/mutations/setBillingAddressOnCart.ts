import { graphql } from '../generated/gql';

export const SetBillingAddressOnCart = graphql(/* GraphQL */ `
  mutation SetBillingAddressOnCart(
    $cartId: String!
    $billingAddress: CartAddressInput
    $useForShipping: Boolean
  ) {
    setBillingAddressOnCart(
      input: {
        billing_address: {
          address: $billingAddress
          use_for_shipping: $useForShipping
        }
        cart_id: $cartId
      }
    ) {
      cart {
        ...CartData
      }
    }
  }
`);
