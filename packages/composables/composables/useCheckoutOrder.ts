export interface UseCheckoutOrder {
  data: Ref<string | null>;
  error: Ref<Error | null>;
  loading: Ref<boolean>;
  placeOrder: () => Promise<void>;
}

export function useCheckoutOrder(): UseCheckoutOrder {
  const data = useState<string | null>('orderNumber', () => null);
  const error = useState<Error | null>('orderNumberError', () => null);
  const loading = useState<boolean>('orderLoading', () => false);

  async function placeOrder(): Promise<void> {
    try {
      loading.value = true;
      data.value = await $fetch('/api/checkout/order');
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    error,
    loading,
    placeOrder
  };
}
