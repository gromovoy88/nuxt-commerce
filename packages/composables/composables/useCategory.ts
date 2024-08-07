import type { Category } from '@thunder/types';

export interface UseCategory {
  data: Ref<Category | null>;
  loading: Ref<boolean>;
  updateCategory: (urlPath: string) => Promise<void>;
  resetCategory: () => void;
}

export function useCategory(): UseCategory {
  const data = useState<Category | null>('category', () => null);
  const error = useState<Error | null>('categoryError', () => null);
  const loading = useState<boolean>('categoryLoading', () => false);

  async function updateCategory(urlPath: string) {
    try {
      loading.value = true;
      data.value = await $fetch(`/api/category/${urlPath}`);
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
  }

  function resetCategory() {
    data.value = null;
  }

  return {
    data,
    loading,
    updateCategory,
    resetCategory
  };
}
