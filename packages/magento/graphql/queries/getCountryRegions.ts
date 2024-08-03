import { graphql } from '../generated/gql';

export const GetCountryRegions = graphql(`
  query GetCountryRegions {
    countries {
      two_letter_abbreviation
      ...Country
    }
  }
`);
