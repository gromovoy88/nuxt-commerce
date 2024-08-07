import type { FiltersInput } from '@thunder/types';

export type QueryFilter = {
  name: string;
  value: string[];
};

export interface UseFiltering {
  setQueryFilter: (filter: QueryFilter) => Promise<void>;
  getQueryFilterValue: (filterName: string) => string[];
  resetQueryFilters: () => Promise<void>;
  getQueryFilters: () => QueryFilter[];
  getFilters: () => FiltersInput;
}

export function useFiltering(): UseFiltering {
  const route = useRoute();
  const router = useRouter();

  async function setQueryFilter({ name, value }: QueryFilter): Promise<void> {
    const filterQuery = ref(route.query.filter?.toString());

    let newFilterQuery = filterQuery.value || '';

    // If there are filters and filterName is not one of them, add the filter query
    if (!filterQuery.value || !filterQuery.value.includes(name)) {
      newFilterQuery = filterQuery.value
        ? `${filterQuery.value},${name}[${value}]`
        : `${name}[${value}]`;
    } else if (!value.length) {
      newFilterQuery = filterQuery.value.replace(
        `${name}[${getQueryFilterValue(name)}]`,
        ''
      );
    } else {
      newFilterQuery = filterQuery.value.replace(
        `${name}[${getQueryFilterValue(name)}]`,
        `${name}[${value}]`
      );
    }

    // remove the first or last comma
    newFilterQuery = newFilterQuery.replace(/^,/, '').replace(/,$/, '');

    // if there is 2 or more commas in a row, replace them with one
    newFilterQuery = newFilterQuery.replace(/,{2,}/g, ',');

    // Update the filter query
    filterQuery.value = newFilterQuery;

    await router.push({ query: { ...route.query, filter: newFilterQuery } });

    if (!newFilterQuery) {
      await router.push({ query: { ...route.query, filter: undefined } });
    } else {
      await router.push({ query: { ...route.query, filter: newFilterQuery } });
    }
  }

  function getQueryFilterValue(name: string): string[] {
    const query = route.query.filter?.toString();
    return query?.split(`${name}[`)[1]?.split(']')[0]?.split(',') || [];
  }

  function getQueryFiltersNameList(): string[] {
    const query = route.query.filter?.toString();

    if (!query) {
      return [];
    }

    return query
      .split('],')
      .flatMap((filter) => filter.split('[')[0]?.split(']'));
  }

  function getQueryFilters(): QueryFilter[] {
    return getQueryFiltersNameList().map((name) => ({
      name,
      value: getQueryFilterValue(name)
    }));
  }

  async function resetQueryFilters(): Promise<void> {
    await router.push({ query: { ...route.query, filter: undefined } });
  }

  function getFilters(): FiltersInput {
    const filters = getQueryFiltersNameList();
    let resultFilters: FiltersInput = {};

    filters.forEach((filterName: string) => {
      const value = getQueryFilterValue(filterName);

      if (filterName === 'price') {
        const [from, to] =
          value.length === 1 ? value.toString().split('_') : ['0', '0'];

        resultFilters = {
          ...resultFilters,
          [filterName]: { from, to }
        };

        return;
      }

      resultFilters = {
        ...resultFilters,
        [filterName]:
          value.length === 1 ? { eq: value.toString() } : { in: value }
      };
    });

    return resultFilters;
  }

  return {
    setQueryFilter,
    getQueryFilterValue,
    getQueryFilters,
    resetQueryFilters,
    getFilters
  };
}
