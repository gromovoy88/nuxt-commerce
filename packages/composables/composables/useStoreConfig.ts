import type { StoreConfig } from '@thunder/types';

export interface UseStoreConfig {
  data: Ref<StoreConfig | null>;
  loading: Ref<boolean>;
  updateStoreConfig: () => Promise<void>;
}

export function useStoreConfig(): UseStoreConfig {
  const data = useState<StoreConfig | null>('storeConfig', () => null);
  const loading = useState<boolean>('storeConfigLoading', () => false);
  const { fetchStoreConfig } = useStoreApi();

  async function updateStoreConfig(): Promise<void> {
    try {
      loading.value = true;

      const { data: storeConfig, error } = await fetchStoreConfig();

      if (!storeConfig) {
        throw new Error(
          error?.message || 'Could not get available store configuration'
        );
      }

      data.value = storeConfig;
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    loading,
    updateStoreConfig
  };
}
