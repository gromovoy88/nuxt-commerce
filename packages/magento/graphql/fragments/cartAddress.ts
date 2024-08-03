import { graphql } from '../generated';

export const CartAddress = graphql(`
  fragment CartAddress on CartAddressInterface {
    lastname
    firstname
    postcode
    city
    street
    country {
      code
      label
    }
    telephone
    region {
      label
      code
    }
  }
`);
