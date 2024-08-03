import { graphql } from '../generated/gql';

export const ProductConfigurableOption = graphql(`
  fragment ProductConfigurableOption on ConfigurableProductOptions {
    attribute_code
    uid
    label
    values {
      store_label
      uid
    }
  }
`);
