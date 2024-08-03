import type { Wishlist } from '@thunder/types';
import { GetWishlistProducts } from '../../graphql/queries/getWishlistProducts';
import { RemoveProductFromWishlist } from '../../graphql/mutations/removeProductFromWishlist';
import { AddProductToWishlist } from '../../graphql/mutations/addProductToWishlist';
import type { FetchResult, PaginableInput } from '../../types';
import { mapWishlist } from '../../utils/mappers';

export function useWishlistApi() {
  async function fetchWishlistProducts({
    pageSize,
    currentPage
  }: PaginableInput): Promise<FetchResult<Wishlist[], Error>> {
    const { data, error } = await useAsyncQuery(GetWishlistProducts, {
      pageSize,
      currentPage
    });

    return {
      data:
        data.value?.customer?.wishlists.map((wishlist) =>
          mapWishlist(wishlist)
        ) ?? null,
      error: error.value
    };
  }

  async function addProductToWishlist(
    sku: string,
    quantity = 1
  ): Promise<FetchResult<Wishlist, Error>> {
    const { mutate, error } = useMutation(AddProductToWishlist);
    const response = await mutate({ input: [{ quantity, sku }] });

    return {
      data: mapWishlist(
        response?.data?.addProductsToWishlist?.wishlist ?? null
      ),
      error: error.value
    };
  }

  async function removeProductFromWishlist(
    wishlistItemId: string
  ): Promise<FetchResult<Wishlist, Error>> {
    const { mutate, error } = useMutation(RemoveProductFromWishlist);
    const response = await mutate({
      wishlistItemId
    });

    return {
      data: mapWishlist(
        response?.data?.removeProductsFromWishlist?.wishlist ?? null
      ),
      error: error.value
    };
  }

  return {
    fetchWishlistProducts,
    addProductToWishlist,
    removeProductFromWishlist
  };
}
