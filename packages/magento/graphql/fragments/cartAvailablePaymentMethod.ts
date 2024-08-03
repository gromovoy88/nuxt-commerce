import { graphql } from '../generated/gql';

export const CartAvailablePaymentMethod = graphql(`
  fragment CartAvailablePaymentMethod on AvailablePaymentMethod {
    code
    title
  }
`);
