import type { Product, ProductList, ProductPage } from '@thunder/types';
import type { FetchResult, ProductListInput } from '../../types';
import { ProductList as ProductListQuery } from '../../graphql/queries/productList';
import { ProductListOnConfigurable } from '../../graphql/queries/productListOnConfigurable';
import { ProductListOnBundle } from '../../graphql/queries/productListOnBundle';
import { ProductListOnGrouped } from '../../graphql/queries/productListOnGrouped';
import { ProductPage as ProductPageQuery } from '../../graphql/queries/productPage';
import { ProductListCrosssel } from '../../graphql/queries/productListCrosssel';
import { ProductListUpsell } from '../../graphql/queries/productListUpsell';
import { mapFilter, mapProductPage, mapSort } from '../../utils/mappers';
import { GRID_PER_PAGE } from '../../utils/constants';

export function useProductApi() {
  async function fetchProducts({
    pageSize,
    currentPage,
    filters,
    sort,
    search
  }: ProductListInput): Promise<FetchResult<ProductList, Error>> {
    const { data, error } = await useAsyncQuery(ProductListQuery, {
      currentPage,
      filters,
      sort,
      search,
      pageSize: pageSize ?? GRID_PER_PAGE
    });

    return {
      data: {
        items:
          data.value?.products?.items?.map((product) => mapProduct(product)) ??
          [],
        filters:
          data.value?.products?.aggregations?.map((aggregation) =>
            mapFilter(aggregation)
          ) ?? [],
        pageInfo: {
          currentPage: data.value?.products?.page_info?.current_page ?? 0,
          totalPages: data.value?.products?.page_info?.total_pages ?? 0
        },
        sort: mapSort(data.value?.products?.sort_fields ?? null),
        totalCount: data.value?.products?.total_count ?? 0
      },
      error: error.value
    };
  }

  async function fetchProductConfigurable(sku: string) {
    const { data, error } = await useAsyncQuery(ProductListOnConfigurable, {
      pageSize: 1,
      currentPage: 1,
      filters: {
        sku: {
          eq: sku
        }
      }
    });

    return {
      data,
      error
    };
  }

  async function fetchProductBundle(sku: string) {
    const { data, error } = await useAsyncQuery(ProductListOnBundle, {
      pageSize: 1,
      currentPage: 1,
      filters: {
        sku: {
          eq: sku
        }
      }
    });

    return {
      data,
      error
    };
  }

  async function fetchProductGrouped(sku: string) {
    const { data, error } = await useAsyncQuery(ProductListOnGrouped, {
      pageSize: 1,
      currentPage: 1,
      filters: {
        sku: {
          eq: sku
        }
      }
    });

    return {
      data,
      error
    };
  }

  async function fetchProductPage(
    urlKey: string
  ): Promise<FetchResult<ProductPage, Error>> {
    const { data, error } = await useAsyncQuery(ProductPageQuery, {
      urlKey
    });

    return {
      data: data.value ? mapProductPage(data.value) : null,
      error: error.value
    };
  }

  async function fetchProductUpsell(
    urlKey: string
  ): Promise<FetchResult<Product[], Error>> {
    const { data, error } = await useAsyncQuery(ProductListUpsell, {
      filters: {
        url_key: {
          eq: urlKey
        }
      }
    });

    return {
      data:
        data.value?.products?.items?.[0]?.upsell_products?.map((product) =>
          mapProduct(product)
        ) ?? null,
      error: error.value
    };
  }

  async function fetchProductCrosssel(
    urlKey: string
  ): Promise<FetchResult<Product[], Error>> {
    const { data, error } = await useAsyncQuery(ProductListCrosssel, {
      filters: {
        url_key: {
          eq: urlKey
        }
      }
    });

    return {
      data:
        data.value?.products?.items?.[0]?.crosssell_products?.map((product) =>
          mapProduct(product)
        ) ?? null,
      error: error.value
    };
  }

  return {
    fetchProducts,
    fetchProductConfigurable,
    fetchProductBundle,
    fetchProductGrouped,
    fetchProductPage,
    fetchProductUpsell,
    fetchProductCrosssel
  };
}
