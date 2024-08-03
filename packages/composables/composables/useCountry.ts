import type { Country } from '@thunder/types';

export interface UseCountry {
  data: Ref<Country[]>;
  loading: Ref<boolean>;
  findCountry: (countryCode: string) => Promise<Country>;
  updateCountries: () => Promise<void>;
}

export function useCountry(): UseCountry {
  const data = useState<Country[]>('countries', () => []);
  const loading = useState<boolean>('countryLoading', () => false);
  const { fetchAllCountries } = useStoreApi();

  async function updateCountries(): Promise<void> {
    try {
      loading.value = true;

      if (data.value.length) return;

      const { data: countriesData, error } = await fetchAllCountries();

      if (!countriesData) {
        throw new Error(error?.message || 'Failed to fetch countries');
      }

      data.value = countriesData;
    } finally {
      loading.value = false;
    }
  }

  async function findCountry(countryCode: string): Promise<Country> {
    try {
      loading.value = true;

      await updateCountries();

      const country = data.value.find(
        (country) => country?.twoLetterAbbreviation === countryCode
      );

      if (!country) {
        throw new Error('Failed to fetch country');
      }

      return country;
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    loading,
    findCountry,
    updateCountries
  };
}
