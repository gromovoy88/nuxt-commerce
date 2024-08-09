import type { Wishlist, PaginableInput } from '@thunder/types';

export interface UseWishlist {
  data: Ref<Wishlist | null>;
  error: Ref<Error | null>;
  loading: Ref<boolean>;
  fetchWishlist: (input?: PaginableInput) => Promise<Wishlist>;
  addProductToWishlist: (productId: string) => Promise<Wishlist>;
  removeProductFromWishlist: (productId: string) => Promise<Wishlist>;
  updateWishlist: (input?: PaginableInput) => Promise<void>;
}

export function useWishlist(): UseWishlist {
  const data = useState<Wishlist | null>('wishlist', () => null);
  const error = useState<Error | null>('wishlistError', () => null);
  const loading = useState<boolean>('wishlistLoading', () => false);

  async function fetchWishlist(input?: PaginableInput): Promise<Wishlist> {
    return await $fetch(`/api/wishlist`, {
      query: input
    });
  }

  async function addProductToWishlist(productId: string): Promise<Wishlist> {
    return await $fetch(`/api/wishlist/add`, {
      method: 'POST',
      query: {
        productId
      }
    });
  }

  async function removeProductFromWishlist(
    productId: string
  ): Promise<Wishlist> {
    return await $fetch(`/api/wishlist/remove`, {
      method: 'POST',
      query: {
        productId
      }
    });
  }

  async function updateWishlist(input?: PaginableInput): Promise<void> {
    loading.value = true;
    const response = await useAsyncData('wishlist-data', () =>
      fetchWishlist(input)
    );
    data.value = response.data.value;
    error.value = response.error.value;
  }

  return {
    data,
    error,
    loading,
    fetchWishlist,
    addProductToWishlist,
    removeProductFromWishlist,
    updateWishlist
  };
}
