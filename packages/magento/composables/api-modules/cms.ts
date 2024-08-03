import type { Page } from '@thunder/types';
import { GetCmsPage } from '../../graphql/queries/getCmsPage';
import type { FetchResult } from '../../types';
import { mapPage } from '../../utils/mappers';

export function useCmsApi() {
  async function fetchCmsPage(
    identifier: string
  ): Promise<FetchResult<Page, Error>> {
    const { data, error } = await useAsyncQuery(GetCmsPage, { identifier });

    return {
      data: data.value?.cmsPage ? mapPage(data.value.cmsPage) : null,
      error: error.value
    };
  }

  return {
    fetchCmsPage
  };
}
