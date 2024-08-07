import type { Cart } from '@thunder/types';

export interface UseCart {
  data: Ref<Cart | null>;
  loading: Ref<boolean>;
  fetchCart: (cartId: string) => Promise<Cart>;
  resetCart: () => void;
  createEmptyCart: () => Promise<Cart>;
  updateCart: (storeId: string) => Promise<void>;
}

export function useCart(): UseCart {
  const data = useState<Cart | null>('cart', () => null);
  const error = useState<Error | null>('cartError', () => null);
  const loading = useState<boolean>('cartLoading', () => false);

  async function createEmptyCart(): Promise<Cart> {
    return await $fetch('/api/cart-create', {
      method: 'POST'
    });
  }

  async function fetchCart(cartId: string): Promise<Cart> {
    return await $fetch(`/api/cart/${cartId}`);
  }

  async function updateCart(cartId: string): Promise<void> {
    loading.value = true;
    const response = await useAsyncData('cart', () => fetchCart(cartId));
    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
  }

  async function resetCart(): Promise<void> {
    await createEmptyCart();
  }

  return {
    data,
    loading,
    fetchCart,
    createEmptyCart,
    updateCart,
    resetCart
  };
}
