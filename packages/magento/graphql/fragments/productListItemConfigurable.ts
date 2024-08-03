import { graphql } from '../generated/gql';

export const ProductListItemConfigurable = graphql(`
  fragment ProductListItemConfigurable on ConfigurableProduct {
    sku
    configurable_options {
      ...ProductConfigurableOption
    }
    variants {
      ...ProductConfigurableVariant
    }
  }
`);
