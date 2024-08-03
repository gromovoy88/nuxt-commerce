import { graphql } from '../generated/gql';

// Here should be used ProductListItem fragment
export const RelatedProducts = graphql(`
  fragment RelatedProducts on ProductInterface {
    related_products {
      name
      media_gallery {
        label
        position
        url
      }
      thumbnail {
        url
        label
      }
      image {
        url
        label
      }
      small_image {
        url
        label
      }
      canonical_url
      url_key
      stock_status
      sku
      description {
        html
      }
      short_description {
        html
      }
      price_range {
        maximum_price {
          final_price {
            ...Money
          }
        }
      }
      rating_summary
      review_count
    }
  }
`);
