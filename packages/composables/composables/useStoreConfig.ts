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
    try {
      loading.value = true;
      data.value = await $fetch('/api/store/config');
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
    updateStoreConfig
  };
}
