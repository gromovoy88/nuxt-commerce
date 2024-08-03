import { graphql } from '../generated/gql';

export const CreateEmptyCart = graphql(`
  mutation CreateEmptyCart {
    createEmptyCart(input: {})
  }
`);
