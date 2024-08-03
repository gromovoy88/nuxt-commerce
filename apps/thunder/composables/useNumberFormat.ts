export type NumberFormatProps = Intl.NumberFormatOptions;
export type NumberFormat = Intl.NumberFormat;

export function useNumberFormat(props?: NumberFormatProps) {
  const { locale, locales } = useI18n();

  const availableLocales = computed(() =>
    locales.value.filter(
      (item) => item instanceof Object && !Array.isArray(item)
    )
  );

  function formatNumber(): NumberFormat {
    const currentLocale = availableLocales.value.find(
      (i) => i.code === locale.value
    );
    const localeIso = currentLocale?.iso || 'en-EN';

    return new Intl.NumberFormat(localeIso, props);
  }

  return {
    formatNumber
  };
}
