import type { Region } from '@thunder/types';

export interface UseRegion {
  loading: Ref<boolean>;
  findRegion: (countryCode: string, regionId: number) => Promise<Region | null>;
}

export function useRegion(): UseRegion {
  const loading = useState<boolean>('regionLoading', () => false);
  const { findCountry } = useCountry();

  async function findRegion(
    countryCode: string,
    regionId: number
  ): Promise<Region> {
    try {
      loading.value = true;

      const country = await findCountry(countryCode);

      const region = country.availableRegions?.find(
        (region) => region?.id === regionId
      );

      if (!region) {
        throw new Error('Failed to fetch region');
      }

      return region;
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    findRegion
  };
}
