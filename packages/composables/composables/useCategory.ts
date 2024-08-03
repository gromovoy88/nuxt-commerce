import type { Category } from '@thunder/types';

export interface UseCategory {
  data: Ref<Category | null>;
  loading: Ref<boolean>;
  updateCategory: (urlPath: string) => Promise<void>;
  resetCategory: () => void;
}

export function useCategory(): UseCategory {
  const data = useState<Category | null>('category', () => null);
  const loading = useState<boolean>('categoryLoading', () => false);
  const { fetchCategory } = useCategoryApi();

  async function updateCategory(urlPath: string) {
    try {
      loading.value = true;

      const { data: category } = await fetchCategory(urlPath);

      data.value = category;
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
