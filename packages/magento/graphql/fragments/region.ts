import { graphql } from '../generated/gql';

export const Region = graphql(`
  fragment Region on Region {
    code
    id
    name
  }
`);
