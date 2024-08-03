import type { Breadcrumb } from '@thunder/types';

export interface UseBreadcrumbs {
  data: Ref<Breadcrumb[]>;
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
  clearBreadcrumbs: () => void;
}

export function useBreadcrumbs(): UseBreadcrumbs {
  const data = useState<Breadcrumb[]>('breadcrumbs', () => []);

  function setBreadcrumbs(payload: Breadcrumb[]) {
    data.value = [...payload];
  }

  function clearBreadcrumbs() {
    data.value = [];
  }

  return {
    data,
    setBreadcrumbs,
    clearBreadcrumbs
  };
}
