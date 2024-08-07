export interface UseCartToken {
  getCartId: () => string;
  setCartId: (id: string) => void;
}

export function useCartToken(): UseCartToken {
  const cartTokenKey = useRuntimeConfig().public.cartToken as string;
  const cartIdCookie = useCookie(cartTokenKey);

  function getCartId(): string {
    return cartIdCookie.value ?? '123';
  }

  function setCartId(id: string): void {
    cartIdCookie.value = id;
  }

  return {
    setCartId,
    getCartId
  };
}
