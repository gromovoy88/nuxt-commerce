import type { MegaMenu } from '@thunder/types';

interface UseMegaMenu {
  data: Ref<MegaMenu | null>;
  error: Ref<Error | null>;
  loading: Ref<boolean>;
  showMegaMenu: Ref<boolean>;
  menuItems: ComputedRef<MegaMenu[]>;
  updateMegaMenu: () => Promise<void>;
}

export function useMegaMenu(): UseMegaMenu {
  const data = useState<MegaMenu | null>('megaMenu', () => null);
  const error = useState<Error | null>('megaMenuError', () => null);
  const loading = useState<boolean>('megaMenuLoading', () => false);
  const showMegaMenu = useState<boolean>('showMegaMenu', () => false);

  async function updateMegaMenu(): Promise<void> {
    loading.value = true;
    const response = await useFetch('/api/menu');
    data.value = response.data.value;
    error.value = response.error.value;
    loading.value = false;
  }

  const menuItems = computed(() => data.value?.children ?? []);

  return {
    data,
    error,
    loading,
    menuItems,
    showMegaMenu,
    updateMegaMenu
  };
}
