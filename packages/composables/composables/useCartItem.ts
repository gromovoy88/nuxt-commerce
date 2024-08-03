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
  const { data: cart, setCart } = useCart();
  const { getCartId } = useCartToken();
  const { addItem, changeItemQuantity, removeItem } = useCartApi();

  async function removeItemAndUpdateCart(cartItemUid: string): Promise<void> {
    try {
      loading.value = true;

      const { data, error } = await removeItem(getCartId(), cartItemUid);

      if (!data) {
        throw new Error(error?.message || 'Failed to remove item from cart.');
      }

      setCart(data);
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

      const { data, error } = await changeItemQuantity(
        getCartId(),
        itemUid,
        quantity
      );

      if (!data) {
        throw new Error(error?.message || 'Failed to update cart item.');
      }

      setCart(data);
    } finally {
      loading.value = false;
    }
  }

  async function addItemAndUpdateCart(
    cartItems: CartItemInput[]
  ): Promise<void> {
    try {
      loading.value = true;

      const { data, error } = await addItem(getCartId(), cartItems);

      if (!data) {
        throw new Error(error?.message || 'Failed to add cart item.');
      }

      setCart(data);
    } finally {
      loading.value = false;
    }
  }

  const cartItems = computed(() => cart.value?.items ?? []);

  return {
    loading,
    addItemAndUpdateCart,
    removeItemAndUpdateCart,
    changeQuantityAndUpdateCart,
    cartItems
  };
}
