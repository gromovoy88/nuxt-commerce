import type { StoreConfig } from '@thunder/types';

export interface UseStoreConfig {
  data: Ref<StoreConfig | null>;
  fetchStoresConfig: () => Promise<StoreConfig[]>;
  fetchStoreConfig: (storeId: string) => Promise<StoreConfig>;
}

export function useStoreConfig(): UseStoreConfig {
  const data = useState<StoreConfig | null>('storeConfig', () => null);

  async function fetchStoresConfig(): Promise<StoreConfig[]> {
    return await $fetch(`/api/stores`);
  }

  async function fetchStoreConfig(storeId: string): Promise<StoreConfig> {
    return await $fetch(`/api/store/config/${storeId}`);
  }

  return {
    data,
    fetchStoresConfig,
    fetchStoreConfig
  };
}
