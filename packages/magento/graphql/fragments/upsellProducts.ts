import { graphql } from '../generated/gql';

// Here should be used ProductListItem fragment
export const UpsellProducts = graphql(`
  fragment UpsellProducts on ProductInterface {
    upsell_products {
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
