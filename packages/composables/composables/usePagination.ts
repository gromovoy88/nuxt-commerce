interface UsePagination {
  setPage: (page: number) => Promise<void>;
  getPage: () => number;
}

export function usePagination(): UsePagination {
  const route = useRoute();
  const router = useRouter();

  async function setPage(page: number): Promise<void> {
    await router.push({ query: { ...(route?.query || {}), page } });
  }

  function getPage(): number {
    return parseInt(route.query?.page?.toString() || '', 10) || 1;
  }

  return {
    setPage,
    getPage
  };
}
