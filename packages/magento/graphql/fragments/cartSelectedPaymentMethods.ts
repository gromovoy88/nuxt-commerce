import { graphql } from '../generated/gql';

export const CartSelectedPaymentMethod = graphql(`
  fragment CartSelectedPaymentMethod on SelectedPaymentMethod {
    code
    title
  }
`);
