import { graphql } from '../generated/gql';

export const GetAvailableStores = graphql(`
  query GetAvailableStores {
    availableStores {
      ...StoreConfigData
    }
  }
`);
