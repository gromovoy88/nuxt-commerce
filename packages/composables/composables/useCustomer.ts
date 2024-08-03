import type { Customer } from '@thunder/types';

export interface UseCustomer {
  data: Ref<Customer | null>;
  loading: Ref<boolean>;
  resetCustomer: () => void;
  updateCustomer: () => Promise<void>;
  setCustomer: (payload: Customer) => void;
}

export function useCustomer(): UseCustomer {
  const data = useState<Customer | null>('customerData', () => null);
  const loading = useState<boolean>('customerLoading', () => false);
  const { fetchCustomer } = useCustomerApi();

  function setCustomer(payload: Customer): void {
    data.value = payload;
  }

  function resetCustomer(): void {
    data.value = null;
  }

  async function updateCustomer(): Promise<void> {
    try {
      loading.value = true;

      const { data, error } = await fetchCustomer();

      if (!data) {
        throw new Error(error?.message || 'Unable to fetch customer data');
      }

      setCustomer(data);
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    loading,
    resetCustomer,
    updateCustomer,
    setCustomer
  };
}
