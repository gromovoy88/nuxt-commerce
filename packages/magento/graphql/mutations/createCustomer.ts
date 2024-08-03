import { graphql } from '../generated/gql';

export const CreateCustomer = graphql(`
  mutation CreateCustomer(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    createCustomer(
      input: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
      }
    ) {
      customer {
        ...CustomerData
      }
    }
  }
`);
