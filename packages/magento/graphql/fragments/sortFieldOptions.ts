import { graphql } from '../generated/gql';

export const SortFieldOptions = graphql(`
  fragment SortFieldOptions on SortFields {
    default
    options {
      ...SortFieldOption
    }
  }
`);
