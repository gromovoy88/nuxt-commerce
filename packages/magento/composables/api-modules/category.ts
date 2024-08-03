import type { Category, MegaMenu } from '@thunder/types';
import { GetCategories } from '../../graphql/queries/getCategories';
import type { FetchResult } from '../../types';
import { GetMegaMenu } from '../../graphql/queries/getMegaMenu';

export function useCategoryApi() {
  async function fetchCategory(
    urlPath: string
  ): Promise<FetchResult<Category, Error>> {
    const { data, error } = await useAsyncQuery(GetCategories, {
      urlPath,
      pageSize: 1
    });

    return {
      data: data.value.categories?.items?.[0]
        ? mapCategory(data.value.categories.items[0])
        : null,
      error: error.value
    };
  }

  async function fetchMegaMenu(
    rootCategory: string
  ): Promise<FetchResult<MegaMenu, Error>> {
    const { data, error } = await useAsyncQuery(GetMegaMenu, {
      filters: {
        category_uid: {
          eq: rootCategory
        }
      }
    });

    return {
      data: data?.value?.categories?.items?.[0]
        ? mapMegaMenu(data.value.categories.items[0])
        : null,
      error: error.value
    };
  }

  return {
    fetchCategory,
    fetchMegaMenu
  };
}
