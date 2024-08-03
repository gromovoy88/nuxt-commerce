import { graphql } from '../generated/gql';

export const Country = graphql(`
  fragment Country on Country {
    full_name_locale
    two_letter_abbreviation
    three_letter_abbreviation
    available_regions {
      id
      ...Region
    }
  }
`);
