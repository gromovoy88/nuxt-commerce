import { graphql } from '../generated/gql';

export const GetStoreConfig = graphql(`
  query GetStoreConfig {
    storeConfig {
      ...StoreConfigData
    }
  }
`);
