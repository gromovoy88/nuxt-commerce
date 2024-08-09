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

  async function fetchCategory(urlPath: string): Promise<Category | null> {
    return await $fetch(`/api/category/${urlPath}`);
  }

  async function updateCategory(urlPath: string) {
    loading.value = true;
    const response = await useAsyncData('category-data', () =>
      fetchCategory(urlPath)
    );
    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
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
