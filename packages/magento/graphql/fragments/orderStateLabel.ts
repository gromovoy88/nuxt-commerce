import { graphql } from '../generated/gql';

export const OrderStateLabel = graphql(`
  fragment OrderStateLabel on CustomerOrder {
    items {
      quantity_ordered
      quantity_shipped
      quantity_canceled
      quantity_invoiced
      quantity_refunded
      quantity_returned
    }
  }
`);
