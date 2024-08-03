import { graphql } from '../generated/gql';

export const UpdateCustomerAddress = graphql(`
  mutation UpdateCustomerAddress($id: Int!, $address: CustomerAddressInput!) {
    updateCustomerAddress(id: $id, input: $address) {
      id
    }
  }
`);
