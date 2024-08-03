import type { Cart } from '@thunder/types';

export interface UseCart {
  data: Ref<Cart | null>;
  loading: Ref<boolean>;
  setCart: (payload: Cart) => void;
  resetCart: () => void;
  createEmptyCart: () => Promise<string>;
  updateCart: (cartId: string) => Promise<void>;
}

export function useCart(): UseCart {
  const data = useState<Cart | null>('cart', () => null);
  const loading = useState<boolean>('cartLoading', () => false);
  const { setCartId } = useCartToken();
  const { createCartId, fetchCart } = useCartApi();

  function setCart(payload: Cart): void {
    data.value = payload;
  }

  async function createEmptyCart(): Promise<string> {
    try {
      loading.value = true;

      const { data: cartId } = await createCartId();

      if (!cartId) {
        throw new Error('Failed to create an empty data.');
      }

      return cartId;
    } finally {
      loading.value = true;
    }
  }

  async function updateCart(cartId: string): Promise<void> {
    try {
      loading.value = true;

      const { data: cartData, error } = await fetchCart(cartId);

      if (error || !cartData) {
        throw new Error(error?.message || 'Failed to refresh data.');
      }

      setCart(cartData);
    } finally {
      loading.value = false;
    }
  }

  async function resetCart(): Promise<void> {
    try {
      loading.value = true;

      const cartId = await createEmptyCart();

      setCartId(cartId);
      await updateCart(cartId);
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    loading,
    createEmptyCart,
    setCart,
    updateCart,
    resetCart
  };
}
