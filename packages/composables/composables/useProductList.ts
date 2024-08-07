import type { ProductList, ProductListInput } from '@thunder/types';

export interface UseProductList {
  data: Ref<ProductList | null>;
  error: Ref<Error | null>;
  input: Ref<ProductListInput>;
  loading: Ref<boolean>;
  updateProductList: (input?: ProductListInput) => Promise<void>;
  resetProductListInput: () => void;
}

export function useProductList(): UseProductList {
  const data = useState<ProductList | null>('productList', () => null);
  const error = useState<Error | null>('productListError', () => null);
  const loading = useState<boolean>('productListLoading', () => false);
  const input = useState<ProductListInput>('productListInput', () => ({}));

  const { getFilters } = useFiltering();
  const { getSearch } = useSearch();
  const { getSort } = useSorting();
  const { getPage } = usePagination();
  const { data: storeConfig } = useStoreConfig();

  async function updateProductList(): Promise<void> {
    try {
      loading.value = true;
      const { pageSize, filters, sort, currentPage = 1, search } = input.value;
      data.value = await $fetch('/api/products', {
        query: {
          sort: { ...getSort(), ...sort },
          filters: { ...getFilters(), ...filters },
          currentPage: getPage() || currentPage,
          pageSize: pageSize || storeConfig.value?.gridPerPage,
          search: getSearch() || search
        }
      });
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
  }

  function resetProductListInput(): void {
    input.value = {};
  }

  return {
    data,
    error,
    input,
    loading,
    updateProductList,
    resetProductListInput
  };
}
