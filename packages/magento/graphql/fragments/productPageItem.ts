import { graphql } from '../generated/gql';

export const ProductPageItem = graphql(`
  fragment ProductPageItem on ProductInterface {
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
    media_gallery {
      label
      position
      url
    }
    categories {
      ...CategoryItem
    }
  }
`);
