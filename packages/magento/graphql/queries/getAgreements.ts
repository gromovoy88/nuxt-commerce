import { graphql } from '../generated/gql';

export const GetAgreements = graphql(`
  query GetAgreements {
    checkoutAgreements {
      ...CheckoutAgreement
    }
  }
`);
