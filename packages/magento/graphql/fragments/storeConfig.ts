import { graphql } from '../generated/gql';

export const StoreConfigData = graphql(`
  fragment StoreConfigData on StoreConfig {
    default_display_currency_code
    locale
    secure_base_media_url
    store_code
    store_group_code
    store_group_name
    store_name
    store_sort_order
    product_url_suffix
    category_url_suffix
    catalog_default_sort_by
    grid_per_page
    root_category_uid
    base_currency_code
  }
`);
