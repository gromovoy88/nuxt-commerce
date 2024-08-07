import type { Route } from '@thunder/types';

export interface UseStoreRoute {
  fetchRoute: (route: string) => Promise<Route>;
}

export function useStoreRoute(): UseStoreRoute {
  async function fetchRoute(route: string): Promise<Route> {
    return await $fetch(`/api/route/${route}`);
  }
  return { fetchRoute };
}
