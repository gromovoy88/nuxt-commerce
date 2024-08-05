import type { ProductListInput } from '@thunder/magento/types';
import type { ProductList } from '@thunder/types';

export interface UseProductList {
  data: Ref<ProductList | null>;
  input: Ref<ProductListInput>;
  loading: Ref<boolean>;
  updateProductList: (input?: ProductListInput) => Promise<void>;
  resetProductListInput: () => void;
}

export const GRID_PER_PAGE = 16;

export function useProductList(): UseProductList {
  const data = useState<ProductList | null>('productList', () => null);
  const loading = useState<boolean>('productListLoading', () => false);
  const input = useState<ProductListInput>('productListInput', () => ({}));

  const { getFilters } = useFiltering();
  const { getSearch } = useSearch();
  const { getSort } = useSorting();
  const { getPage } = usePagination();
  const { data: storeConfig } = useStoreConfig();
  const { fetchProducts } = useProductApi();

  async function updateProductList(): Promise<void> {
    try {
      loading.value = true;

      const { pageSize, filters, sort, currentPage = 1, search } = input.value;
      const productList = await fetchProducts({
        sort: { ...getSort(), ...sort },
        filters: { ...getFilters(), ...filters },
        currentPage: getPage() || currentPage,
        pageSize: pageSize || storeConfig.value?.gridPerPage || GRID_PER_PAGE,
        search: getSearch() || search
      });

      data.value = productList.data;
    } finally {
      loading.value = false;
    }
  }

  function resetProductListInput(): void {
    input.value = {};
  }

  return {
    data,
    input,
    loading,
    updateProductList,
    resetProductListInput
  };
}
