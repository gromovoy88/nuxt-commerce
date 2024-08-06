import type { StoreConfig } from '@thunder/types';

export interface UseStoreConfig {
  data: Ref<StoreConfig | null>;
  loading: Ref<boolean>;
  updateStoreConfig: () => Promise<void>;
}

export function useStoreConfig(): UseStoreConfig {
  const data = useState<StoreConfig | null>('storeConfig', () => null);
  const error = useState<Error | null>('storeConfigError', () => null);
  const loading = useState<boolean>('storeConfigLoading', () => false);

  async function updateStoreConfig(): Promise<void> {
    loading.value = true;
    const response = await useFetch('/api/store/config');
    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
  }

  return {
    data,
    loading,
    updateStoreConfig
  };
}
