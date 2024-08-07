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

  async function updateCustomer(): Promise<void> {
    try {
      loading.value = true;
      data.value = await $fetch('/api/account/customer', {
        method: 'POST'
      });
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
    loading,
    resetCustomer,
    updateCustomer,
    setCustomer
  };
}
