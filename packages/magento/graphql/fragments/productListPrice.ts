import { graphql } from '../generated/gql';

export const ProductListPrice = graphql(`
  fragment ProductListPrice on ProductPrice {
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
  }
`);
