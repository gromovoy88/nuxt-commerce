interface UseSearch {
  data: Ref<string>;
  isSearch: ComputedRef<boolean>;
  setSearch: (search: string) => Promise<void>;
  getSearch: () => string;
  resetSearch: () => Promise<void>;
}

export function useSearch(): UseSearch {
  const data = useState<string>('searchData', () => '');
  const route = useRoute();
  const router = useRouter();

  async function setSearch(search: string): Promise<void> {
    data.value = search;
    await router.push({ query: { ...route.query, query: search } });
  }

  function getSearch(): string {
    return route.query.query?.toString() || '';
  }

  async function resetSearch(): Promise<void> {
    await setSearch('');
  }

  const isSearch = computed(() => !!data.value);

  return {
    data,
    isSearch,
    setSearch,
    getSearch,
    resetSearch
  };
}
