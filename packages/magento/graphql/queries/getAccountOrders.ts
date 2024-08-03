import { graphql } from '../generated/gql';

export const GetAccountOrders = graphql(`
  query GetAccountOrders($currentPage: Int!, $pageSize: Int!) {
    customer {
      ...CustomerOrders
    }
  }
`);
