import type { ProductPage } from '@thunder/types';

export interface UseProductPage {
  data: Ref<ProductPage | null>;
  error: Ref<Error | null>;
  loading: Ref<boolean>;
  updateProductPage: (id: string) => Promise<void>;
}

export function useProductPage(): UseProductPage {
  const data = useState<ProductPage | null>('productPage', () => null);
  const error = useState<Error | null>('productPageError', () => null);
  const loading = useState<boolean>('productPageLoading', () => false);

  async function updateProductPage(id: string): Promise<void> {
    loading.value = true;
    const response = await useFetch(`/api/product-page/${id}`);

    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
  }

  return {
    data,
    error,
    loading,
    updateProductPage
  };
}
