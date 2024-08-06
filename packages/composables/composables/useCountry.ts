import type { Country } from '@thunder/types';

export interface UseCountry {
  data: Ref<Country[]>;
  loading: Ref<boolean>;
  findCountry: (countryCode: string) => Promise<Country>;
  updateCountries: () => Promise<void>;
}

export function useCountry(): UseCountry {
  const data = useState<Country[]>('countries', () => []);
  const error = useState<Error | null>('countriesError', () => null);
  const loading = useState<boolean>('countryLoading', () => false);

  async function updateCountries(): Promise<void> {
    loading.value = true;
    const response = await useFetch('/api/countries');
    data.value = response.data.value ?? [];
    error.value = response.error.value;
    loading.value = false;
  }

  async function findCountry(countryCode: string): Promise<Country> {
    try {
      loading.value = true;

      await updateCountries();

      const country = data.value.find(
        (country) => country?.twoLetterAbbreviation === countryCode
      );

      if (!country) {
        throw new Error('Failed to find country');
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
