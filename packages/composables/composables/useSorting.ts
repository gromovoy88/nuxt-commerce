import type { SortInput } from '@thunder/magento/types';

export interface UseSorting {
  sortValue: Ref<string>;
  sortOrder: Ref<string>;
  getSort: () => SortInput;
  setSort: (value: string, order: string) => void;
}

export function useSorting(): UseSorting {
  const { data: storeConfig } = useStoreConfig();
  const sortValue = useState<string>(
    'sortValue',
    () => storeConfig.value?.catalogDefaultSortBy || ''
  );
  const sortOrder = useState<string>('sortOrder', () =>
    storeConfig.value?.storeSortOrder ? 'ASC' : 'DESC'
  );

  function setSort(value: string, order: string): void {
    sortValue.value = value;
    sortOrder.value = order;
  }

  function getSort(): SortInput {
    if (!sortOrder.value && !sortValue.value) {
      return {};
    }

    return {
      [sortValue.value]: sortOrder.value
    };
  }

  return {
    sortValue,
    sortOrder,
    getSort,
    setSort
  };
}
