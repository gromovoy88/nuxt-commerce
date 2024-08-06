import type { Cart } from '@thunder/types';

export interface UseCart {
  data: Ref<Cart | null>;
  loading: Ref<boolean>;
  setCart: (payload: Cart) => void;
  resetCart: () => void;
  createEmptyCart: () => Promise<void>;
  updateCart: (cartId: string) => Promise<void>;
}

export function useCart(): UseCart {
  const data = useState<Cart | null>('cart', () => null);
  const error = useState<Error | null>('cartError', () => null);
  const loading = useState<boolean>('cartLoading', () => false);
  const { setCartId } = useCartToken();

  function setCart(payload: Cart): void {
    data.value = payload;
  }

  async function createEmptyCart(): Promise<void> {
    loading.value = true;

    const response = await useFetch('/api/cart-create', {
      method: 'POST'
    });

    if (response.data.value) {
      setCartId(response.data.value.id);
    }

    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = true;
  }

  async function updateCart(cartId: string): Promise<void> {
    loading.value = true;

    const response = await useFetch(`/api/cart/${cartId || '123'}`);
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
    createEmptyCart,
    setCart,
    updateCart,
    resetCart
  };
}
