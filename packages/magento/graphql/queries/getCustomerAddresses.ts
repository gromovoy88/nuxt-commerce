import { graphql } from '../generated/gql';

export const GetCustomerAddresses = graphql(`
  query GetCustomerAddresses {
    customer {
      default_billing
      default_shipping
      addresses {
        id
        ...CustomerAddressItem
      }
    }
  }
`);
