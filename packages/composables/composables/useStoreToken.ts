export interface UseStoreToken {
  getStoreId: () => string;
  setStoreId: (id: string) => void;
}

export function useStoreToken(): UseStoreToken {
  const storeTokenKey = useRuntimeConfig().public.storeToken as string;
  const storeIdCookie = useCookie(storeTokenKey);

  function getStoreId(): string {
    return storeIdCookie.value ?? '123';
  }

  function setStoreId(id: string): void {
    storeIdCookie.value = id;
  }

  return {
    setStoreId,
    getStoreId
  };
}
