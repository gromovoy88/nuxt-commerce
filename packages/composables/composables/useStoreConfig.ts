import type { StoreConfig } from '@thunder/types';
import { useStoreToken } from './useStoreToken';

export interface UseStoreConfig {
  data: Ref<StoreConfig | null>;
  loading: Ref<boolean>;
  fetchStoresConfig: () => Promise<StoreConfig[]>;
  fetchStoreConfig: (storeId: string) => Promise<StoreConfig>;
  updateStoreConfig: (storeId: string) => Promise<void>;
}

export function useStoreConfig(): UseStoreConfig {
  const data = useState<StoreConfig | null>('storeConfig', () => null);
  const error = useState<Error | null>('storeConfigError', () => null);
  const loading = useState<boolean>('storeConfigLoading', () => false);
  const { getStoreId } = useStoreToken();

  async function fetchStoresConfig(): Promise<StoreConfig[]> {
    return await $fetch(`/api/stores`);
  }

  async function fetchStoreConfig(storeId: string): Promise<StoreConfig> {
    return await $fetch(`/api/store/config/${storeId}`);
  }

  async function updateStoreConfig(storeId: string): Promise<void> {
    loading.value = true;
    const response = await useAsyncData('storeConfig', () =>
      fetchStoreConfig(storeId)
    );
    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
  }

  return {
    data,
    loading,
    fetchStoresConfig,
    fetchStoreConfig,
    updateStoreConfig
  };
}
