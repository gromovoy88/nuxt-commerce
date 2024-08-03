import { graphql } from '../generated/gql';

export const CartShippingAddress = graphql(`
  fragment CartShippingAddress on ShippingCartAddress {
    available_shipping_methods {
      ...CartAvailableShippingMethod
    }
    selected_shipping_method {
      ...CartSelectedShippingMethod
    }
  }
`);
