import { graphql } from '../generated/gql';

export const ProductPagePrice = graphql(`
  fragment ProductPagePrice on ProductInterface {
    price_range {
      minimum_price {
        regular_price {
          ...Money
        }
        discount {
          amount_off
          percent_off
        }
        final_price {
          ...Money
        }
        fixed_product_taxes {
          amount {
            ...Money
          }
          label
        }
      }
    }
    price_tiers {
      discount {
        amount_off
        percent_off
      }
      final_price {
        ...Money
      }
      quantity
    }
  }
`);
