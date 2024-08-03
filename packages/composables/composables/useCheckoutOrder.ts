export interface UseCheckoutOrder {
  data: Ref<string>;
  loading: Ref<boolean>;
  placeOrder: () => Promise<void>;
}

export function useCheckoutOrder(): UseCheckoutOrder {
  const data = useState<string>('orderNumber', () => '');
  const loading = useState<boolean>('orderLoading', () => false);
  const { getCartId } = useCartToken();
  const { placeOrder: createOrder } = useCheckoutApi();

  async function placeOrder(): Promise<void> {
    try {
      loading.value = true;

      const { data: order, error } = await createOrder(getCartId());

      if (!order) {
        throw new Error(error?.message || 'Unable to place an order');
      }

      data.value = order.number;
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    loading,
    placeOrder
  };
}
