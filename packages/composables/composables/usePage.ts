import type { Page } from '@thunder/types';

export interface UsePage {
  fetchPage: (id: string) => Promise<Page>;
}

export function usePage(): UsePage {
  async function fetchPage(id: string): Promise<Page> {
    return await $fetch(`/api/page/${id}`);
  }

  return { fetchPage };
}
