import { graphql } from '../generated/gql';

export const SortFieldOption = graphql(`
  fragment SortFieldOption on SortField {
    label
    value
  }
`);
