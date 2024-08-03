import { graphql } from '../generated/gql';

export const SetShippingMethodsOnCart = graphql(/* GraphQL */ `
  mutation SetShippingMethodsOnCart(
    $cartId: String!
    $methodCode: String!
    $carrierCode: String!
  ) {
    setShippingMethodsOnCart(
      input: {
        cart_id: $cartId
        shipping_methods: [
          { carrier_code: $carrierCode, method_code: $methodCode }
        ]
      }
    ) {
      cart {
        ...CartData
      }
    }
  }
`);
