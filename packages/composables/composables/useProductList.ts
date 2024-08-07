import type { ProductList, ProductListInput } from '@thunder/types';

export interface UseProductList {
  data: Ref<ProductList | null>;
  error: Ref<Error | null>;
  input: Ref<ProductListInput>;
  loading: Ref<boolean>;
  updateProductList: (input?: ProductListInput) => Promise<void>;
  resetProductListInput: () => void;
}

export const GRID_PER_PAGE = 16;

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
    loading.value = true;
    const { pageSize, filters, sort, currentPage = 1, search } = input.value;
    const response = await useFetch('/api/products', {
      body: {
        sort: { ...getSort(), ...sort },
        filters: { ...getFilters(), ...filters },
        currentPage: getPage() || currentPage,
        pageSize: pageSize || storeConfig.value?.gridPerPage || GRID_PER_PAGE,
        search: getSearch() || search
      }
    });

    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
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
