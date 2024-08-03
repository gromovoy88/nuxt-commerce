import { graphql } from '../generated/gql';

export const AddCustomerAddress = graphql(`
  mutation AddCustomerAddress($address: CustomerAddressInput!) {
    createCustomerAddress(input: $address) {
      ...CustomerAddressItem
    }
  }
`);
