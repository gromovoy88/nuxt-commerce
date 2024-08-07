import type { ProductList, ProductListInput } from '@thunder/types';

export interface UseProductList {
  data: Ref<ProductList | null>;
  error: Ref<Error | null>;
  input: Ref<ProductListInput>;
  loading: Ref<boolean>;
  fetchProductList: (input?: ProductListInput) => Promise<ProductList>;
  updateProductList: () => Promise<void>;
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

  async function fetchProductList(
    input?: ProductListInput
  ): Promise<ProductList> {
    return await $fetch('/api/products', {
      query: {
        sort: { ...getSort(), ...input?.sort },
        filters: { ...getFilters(), ...input?.filters },
        currentPage: getPage() || input?.currentPage,
        pageSize: input?.pageSize || storeConfig.value?.gridPerPage,
        search: getSearch() || input?.search
      }
    });
  }

  async function updateProductList(): Promise<void> {
    loading.value = true;
    const response = await useAsyncData('product-list', () =>
      fetchProductList(input.value)
    );
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
    fetchProductList,
    updateProductList,
    resetProductListInput
  };
}
