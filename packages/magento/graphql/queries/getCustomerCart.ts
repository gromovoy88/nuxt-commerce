import { graphql } from '../generated/gql';

export const GetCustomerCart = graphql(`
  query GetCustomerCart {
    customerCart {
      id
    }
  }
`);
