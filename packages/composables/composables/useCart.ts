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
    try {
      loading.value = true;
      data.value = await $fetch('/api/cart-create', {
        method: 'POST'
      });

      if (data.value) {
        setCartId(data.value.id);
      }
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
  }

  async function updateCart(cartId: string): Promise<void> {
    try {
      loading.value = true;
      data.value = await $fetch(`/api/cart/${cartId || '123'}`);
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
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
