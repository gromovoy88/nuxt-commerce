import { graphql } from '../generated/gql';

export const Money = graphql(`
  fragment Money on Money {
    currency
    value
  }
`);
