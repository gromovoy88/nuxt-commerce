import { graphql } from '../generated/gql';

export const CartSelectedShippingMethod = graphql(`
  fragment CartSelectedShippingMethod on SelectedShippingMethod {
    carrier_code
    carrier_title
    method_code
    method_title
    amount {
      ...Money
    }
  }
`);
