import { graphql } from '../generated/gql';

export const CheckoutAgreement = graphql(`
  fragment CheckoutAgreement on CheckoutAgreement {
    agreement_id
    checkbox_text
    content
    mode
    name
  }
`);
