import { graphql } from '../generated/gql';

// Here should be used ProductListItem fragment
export const CrosssellProducts = graphql(`
  fragment CrosssellProducts on ProductInterface {
    crosssell_products {
      name
      image {
        url
        label
      }
      thumbnail {
        url
        label
      }
      url_key
      sku
      short_description {
        html
      }
      description {
        html
      }
      price_range {
        minimum_price {
          ...ProductListPrice
        }
      }
      rating_summary
      review_count
      sale
    }
  }
`);
