import type { Region } from '@thunder/types';

export interface UseRegions {
  loading: Ref<boolean>;
  getRegions: (countryCode: string) => Promise<Region[]>;
}

export function useRegions(): UseRegions {
  const loading = useState<boolean>('regionsLoading', () => false);
  const { data: countries, updateCountries } = useCountry();

  async function getRegions(countryCode: string): Promise<Region[]> {
    try {
      loading.value = true;
      await updateCountries();

      const country = countries.value.find(
        (country) => countryCode === country.twoLetterAbbreviation
      );

      if (!country) throw new Error('Region cannot be found');

      return country.availableRegions;
    } finally {
      loading.value = false;
    }
  }

  return {
    loading,
    getRegions
  };
}
