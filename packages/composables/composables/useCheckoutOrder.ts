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
    loading.value = true;

    const response = await useFetch('/api/checkout/order');

    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
  }

  return {
    data,
    error,
    loading,
    placeOrder
  };
}
