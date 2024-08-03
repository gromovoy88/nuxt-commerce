import { graphql } from '../generated/gql';

export const CustomerData = graphql(`
  fragment CustomerData on Customer {
    default_billing
    default_shipping
    dob
    email
    firstname
    gender
    group_id
    id
    is_subscribed
    lastname
    middlename
    prefix
    suffix
    taxvat
  }
`);
