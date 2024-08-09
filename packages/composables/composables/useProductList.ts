import type { ProductList, ProductListInput } from '@thunder/types';

export interface UseProductList {
  input: Ref<ProductListInput>;
  fetchProductList: (input?: ProductListInput) => Promise<ProductList>;
  resetProductListInput: () => void;
}

export function useProductList(): UseProductList {
  const input = useState<ProductListInput>('productListInput', () => ({}));

  const { getFilters } = useFiltering();
  const { getSearch } = useSearch();
  const { getSort } = useSorting();
  const { getPage } = usePagination();
  const { data: storeConfig } = useStoreConfig();

  function getProductQuery(input?: ProductListInput): ProductListInput {
    return {
      sort: { ...getSort(), ...input?.sort },
      filters: { ...getFilters(), ...input?.filters },
      currentPage: getPage() || input?.currentPage,
      pageSize: input?.pageSize || storeConfig.value?.gridPerPage,
      search: getSearch() || input?.search
    };
  }

  async function fetchProductList(
    input?: ProductListInput
  ): Promise<ProductList> {
    return await $fetch('/api/products', {
      query: getProductQuery(input)
    });
  }

  function resetProductListInput(): void {
    input.value = {};
  }

  return {
    input,
    fetchProductList,
    resetProductListInput
  };
}
