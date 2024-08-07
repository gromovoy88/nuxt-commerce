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
  const error = useState<Error | null>('customerDataError', () => null);
  const loading = useState<boolean>('customerLoading', () => false);

  function setCustomer(payload: Customer): void {
    data.value = payload;
  }

  function resetCustomer(): void {
    data.value = null;
  }

  async function fetchCustomer(): Promise<Customer> {
    return await $fetch('/api/account/customer');
  }

  async function updateCustomer(): Promise<void> {
    loading.value = true;
    const response = await useAsyncData('customer', () => fetchCustomer());
    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
  }

  return {
    data,
    loading,
    resetCustomer,
    updateCustomer,
    setCustomer
  };
}
