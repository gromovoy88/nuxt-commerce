import type { CartItemInput } from '@thunder/magento/types';
import type { CartItem } from '@thunder/types';

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
  const { data: cartData } = useCart();

  async function removeItemAndUpdateCart(itemUid: string): Promise<void> {
    loading.value = true;
    const response = await useFetch('/api/cart-item/remove', {
      method: 'post',
      body: {
        cartId: cartData.value?.id,
        itemUid
      }
    });
    cartData.value = response.data.value;
    loading.value = false;
  }

  async function changeQuantityAndUpdateCart(
    itemUid: string,
    quantity: number
  ): Promise<void> {
    loading.value = true;
    const response = await useFetch('/api/cart-item/update', {
      method: 'post',
      body: {
        cartId: cartData.value?.id,
        itemUid,
        quantity
      }
    });
    cartData.value = response.data.value;
    loading.value = false;
  }

  async function addItemAndUpdateCart(
    cartItems: CartItemInput[]
  ): Promise<void> {
    loading.value = true;
    const response = await useFetch('/api/cart-item/add', {
      method: 'post',
      body: {
        cartId: cartData.value?.id,
        cartItems
      }
    });
    cartData.value = response.data.value;
    loading.value = false;
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
