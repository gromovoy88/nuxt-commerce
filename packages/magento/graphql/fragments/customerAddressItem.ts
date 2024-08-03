import { graphql } from '../generated/gql';

export const CustomerAddressItem = graphql(`
  fragment CustomerAddressItem on CustomerAddress {
    city
    company
    country_code
    country_id
    default_billing
    default_shipping
    fax
    firstname
    id
    lastname
    middlename
    postcode
    prefix
    region_id
    street
    suffix
    telephone
    vat_id
  }
`);
