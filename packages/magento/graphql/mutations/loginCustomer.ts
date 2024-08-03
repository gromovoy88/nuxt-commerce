import { graphql } from '../generated/gql';

export const LoginCustomer = graphql(/* GraphQL */ `
  mutation LoginCustomer($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`);
