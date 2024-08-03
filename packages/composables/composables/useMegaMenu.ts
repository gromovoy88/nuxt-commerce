import type { MegaMenu } from '@thunder/types';

interface UseMegaMenu {
  data: Ref<MegaMenu | null>;
  loading: Ref<boolean>;
  showMegaMenu: Ref<boolean>;
  menuItems: ComputedRef<MegaMenu[]>;
  updateMegaMenu: () => Promise<void>;
}

export function useMegaMenu(): UseMegaMenu {
  const data = useState<MegaMenu | null>('megaMenu', () => null);
  const loading = useState<boolean>('megaMenuLoading', () => false);
  const showMegaMenu = useState<boolean>('showMegaMenu', () => false);
  const { data: storeConfig } = useStoreConfig();
  const { fetchMegaMenu } = useCategoryApi();

  async function updateMegaMenu(): Promise<void> {
    try {
      loading.value = true;

      const { data: megaMenuData, error } = await fetchMegaMenu(
        storeConfig.value?.rootCategoryUid ?? ''
      );

      if (!megaMenuData) {
        throw new Error(error?.message || 'Failed to fetch menu data.');
      }

      data.value = megaMenuData;
    } finally {
      loading.value = false;
    }
  }

  const menuItems = computed(() => data.value?.children ?? []);

  return {
    data,
    loading,
    menuItems,
    showMegaMenu,
    updateMegaMenu
  };
}
