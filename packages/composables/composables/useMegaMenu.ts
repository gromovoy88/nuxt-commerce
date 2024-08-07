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
    try {
      loading.value = true;
      data.value = await $fetch('/api/menu');
    } catch (e) {
      if (e instanceof Error) {
        error.value = e;
      }
    } finally {
      loading.value = false;
    }
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
