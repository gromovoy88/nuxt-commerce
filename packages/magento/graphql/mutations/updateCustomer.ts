import { graphql } from '../generated/gql';

export const UpdateCustomer = graphql(`
  mutation UpdateCustomerName($firstName: String!, $lastName: String!) {
    updateCustomerV2(input: { firstname: $firstName, lastname: $lastName }) {
      customer {
        ...CustomerData
      }
    }
  }
`);
