import type { Cart, SetBillingAddressInput } from '@thunder/types';

export interface UseCart {
  data: Ref<Cart | null>;
  fetchCart: (cartId: string) => Promise<Cart>;
  resetCart: () => Promise<void>;
  createEmptyCart: () => Promise<Cart>;
  mergeCarts: (
    sourceCartId: string,
    destinationCartId: string
  ) => Promise<Cart>;
  setGuestEmailToCart: (cartId: string, email: string) => Promise<Cart>;
  applyDiscountCode: (cartId: string, code: string) => Promise<Cart>;
  setBillingAddress: (
    cartId: string,
    input: SetBillingAddressInput
  ) => Promise<Cart>;
  setPaymentMethod: (cartId: string, method: string) => Promise<Cart>;
  setShippingMethod: (cartId: string, method: string) => Promise<Cart>;
}

export function useCart(): UseCart {
  const data = useState<Cart | null>('cart', () => null);

  async function createEmptyCart(): Promise<Cart> {
    return await $fetch('/api/cart/create', {
      method: 'POST'
    });
  }

  async function fetchCart(cartId: string): Promise<Cart> {
    return await $fetch(`/api/cart`, {
      method: 'POST',
      body: {
        cartId
      }
    });
  }

  async function resetCart(): Promise<void> {
    data.value = await createEmptyCart();
  }

  async function mergeCarts(
    sourceCartId: string,
    destinationCartId: string
  ): Promise<Cart> {
    return await $fetch(`/api/cart/merge`, {
      method: 'POST',
      body: {
        sourceCartId,
        destinationCartId
      }
    });
  }

  async function setGuestEmailToCart(
    cartId: string,
    email: string
  ): Promise<Cart> {
    return await $fetch(`/api/cart/set-guest-email`, {
      method: 'POST',
      query: {
        cartId,
        email
      }
    });
  }

  async function applyDiscountCode(
    cartId: string,
    code: string
  ): Promise<Cart> {
    return await $fetch(`/api/cart/discount/apply`, {
      method: 'POST',
      query: {
        cartId,
        code
      }
    });
  }

  async function setBillingAddress(
    cartId: string,
    input: SetBillingAddressInput
  ): Promise<Cart> {
    return await $fetch(`/api/cart/set-billingAddress`, {
      method: 'POST',
      body: {
        cartId,
        input
      }
    });
  }

  async function setPaymentMethod(
    cartId: string,
    method: string
  ): Promise<Cart> {
    return await $fetch(`/api/cart/set-billing-address`, {
      method: 'POST',
      body: {
        cartId,
        method
      }
    });
  }

  async function setShippingMethod(
    cartId: string,
    method: string
  ): Promise<Cart> {
    return await $fetch(`/api/cart/set-shipping-method`, {
      method: 'POST',
      body: {
        cartId,
        method
      }
    });
  }

  return {
    data,
    fetchCart,
    createEmptyCart,
    mergeCarts,
    resetCart,
    setGuestEmailToCart,
    applyDiscountCode,
    setBillingAddress,
    setPaymentMethod,
    setShippingMethod
  };
}
