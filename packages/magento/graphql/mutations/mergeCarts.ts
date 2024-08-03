import { graphql } from '../generated/gql';

export const MergeCarts = graphql(/* GraphQL */ `
  mutation MergeCartsMutation(
    $sourceCartId: String!
    $destinationCartId: String!
  ) {
    mergeCarts(
      source_cart_id: $sourceCartId
      destination_cart_id: $destinationCartId
    ) {
      id
      ...CartData
    }
  }
`);
