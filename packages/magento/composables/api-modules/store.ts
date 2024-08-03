import type { Country, Route, StoreConfig } from '@thunder/types';
import type { FetchResult } from '../../types';
import { GetCountryRegions } from '../../graphql/queries/getCountryRegions';
import { GetRoute } from '../../graphql/queries/getRoute';
import { GetAvailableStores } from '../../graphql/queries/getAvailableStores';
import { GetStoreConfig } from '../../graphql/queries/getStoreConfig';

export function useStoreApi() {
  async function fetchStoreConfig(): Promise<FetchResult<StoreConfig, Error>> {
    const { data, error } = await useAsyncQuery(GetStoreConfig);

    return {
      data: data.value ? mapStoreConfig(data.value.storeConfig) : null,
      error: error.value
    };
  }

  async function fetchAvailableStores(): Promise<
    FetchResult<StoreConfig[], Error>
  > {
    const { data, error } = await useAsyncQuery(GetAvailableStores);

    return {
      data: data.value?.availableStores
        ? data.value.availableStores.map((config) => mapStoreConfig(config))
        : null,
      error: error.value
    };
  }

  async function fetchAllCountries(): Promise<FetchResult<Country[], Error>> {
    const { data, error } = await useAsyncQuery(GetCountryRegions);

    return {
      data: data.value?.countries
        ? data.value.countries.map((country) => mapCountry(country))
        : null,
      error: error.value
    };
  }

  async function fetchRoute(url: string): Promise<FetchResult<Route, Error>> {
    const { data, error } = await useAsyncQuery(GetRoute, { url });

    return {
      data: data.value?.route ? mapRouteType(data.value) : null,
      error: error.value
    };
  }

  return {
    fetchStoreConfig,
    fetchAvailableStores,
    fetchAllCountries,
    fetchRoute
  };
}
