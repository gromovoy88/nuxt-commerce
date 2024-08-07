import type { CartItemInput, CartItem } from '@thunder/types';

export interface UseCartItem {
  loading: Ref<boolean>;
  removeItemAndUpdateCart: (itemUid: string) => Promise<void>;
  changeQuantityAndUpdateCart: (
    itemUid: string,
    quantity: number
  ) => Promise<void>;
  addItemAndUpdateCart: (cartItems: CartItemInput[]) => Promise<void>;
  cartItems: ComputedRef<CartItem[]>;
}

export function useCartItem(): UseCartItem {
  const loading = useState<boolean>('cartItemLoading', () => false);
  const error = useState<Error | null>('cartItemError', () => null);
  const { data: cartData } = useCart();

  async function removeItemAndUpdateCart(itemUid: string): Promise<void> {
    try {
      loading.value = true;
      cartData.value = await $fetch('/api/cart-item/remove', {
        method: 'post',
        body: {
          cartId: cartData.value?.id,
          itemUid
        }
      });
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
  }

  async function changeQuantityAndUpdateCart(
    itemUid: string,
    quantity: number
  ): Promise<void> {
    try {
      loading.value = true;
      cartData.value = await $fetch('/api/cart-item/update', {
        method: 'post',
        body: {
          cartId: cartData.value?.id,
          itemUid,
          quantity
        }
      });
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
  }

  async function addItemAndUpdateCart(
    cartItems: CartItemInput[]
  ): Promise<void> {
    try {
      loading.value = true;
      cartData.value = await $fetch('/api/cart-item/add', {
        method: 'post',
        body: {
          cartId: cartData.value?.id,
          cartItems
        }
      });
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
  }

  const cartItems = computed(() => cartData.value?.items ?? []);

  return {
    loading,
    addItemAndUpdateCart,
    removeItemAndUpdateCart,
    changeQuantityAndUpdateCart,
    cartItems
  };
}
