import { graphql } from '../generated/gql';

export const ApplyDiscountCoupon = graphql(`
  mutation ApplyDiscountCoupon($cartId: String!, $couponCode: String!) {
    applyCouponToCart(input: { cart_id: $cartId, coupon_code: $couponCode }) {
      cart {
        ...CartData
      }
    }
  }
`);
