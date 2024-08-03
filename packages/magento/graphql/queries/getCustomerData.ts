import { graphql } from '../generated/gql';

export const GetCustomerData = graphql(`
  query GetCustomerData {
    customer {
      ...CustomerData
    }
  }
`);
