import { graphql } from '../generated/gql';

export const CustomerOrders = graphql(`
  fragment CustomerOrders on Customer {
    orders(filter: {}, pageSize: $pageSize, currentPage: $currentPage) {
      items {
        number
        ...OrderCard
      }
      page_info {
        current_page
        page_size
        total_pages
      }
      total_count
    }
  }
`);
