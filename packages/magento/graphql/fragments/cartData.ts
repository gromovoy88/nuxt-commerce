import { graphql } from '../generated/gql';

export const CartData = graphql(`
  fragment CartData on Cart {
    email
    id
    is_virtual
    items {
      uid
      ...CartItem
    }
    prices {
      subtotal_including_tax {
        ...Money
      }
      grand_total {
        ...Money
      }
      discounts {
        amount {
          ...Money
        }
        label
      }
    }
    total_quantity
    billing_address {
      ...CartAddress
    }
    shipping_addresses {
      ...CartShippingAddress
    }
    selected_payment_method {
      ...CartSelectedPaymentMethod
    }
    available_payment_methods {
      ...CartAvailablePaymentMethod
    }
  }
`);
