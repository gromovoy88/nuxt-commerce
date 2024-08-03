import { graphql } from '../generated/gql';

export const ProductConfigurableVariant = graphql(`
  fragment ProductConfigurableVariant on ConfigurableVariant {
    attributes {
      value_index
      uid
      code
    }
    product {
      uid
      sku
      name
      image {
        url
        label
      }
    }
  }
`);
