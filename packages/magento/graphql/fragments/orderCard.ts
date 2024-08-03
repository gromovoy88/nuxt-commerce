import { graphql } from '../generated/gql';

export const OrderCard = graphql(`
  fragment OrderCard on CustomerOrder {
    number
    shipments {
      tracking {
        ...TrackingLink
      }
    }
    total {
      grand_total {
        ...Money
      }
    }
    items {
      product_sku
      ...OrderCardItem
    }
    ...OrderStateLabel
    order_date
  }
`);
