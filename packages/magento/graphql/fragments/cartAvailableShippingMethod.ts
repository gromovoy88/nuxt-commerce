import { graphql } from '../generated/gql';

export const CartAvailableShippingMethod = graphql(`
  fragment CartAvailableShippingMethod on AvailableShippingMethod {
    carrier_code
    carrier_title
    method_code
    method_title
    available
    amount {
      ...Money
    }
  }
`);
