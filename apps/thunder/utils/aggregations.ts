import type { Filter } from '@thunder/types';

export type ProductFilterParams = {
  search: string | null;
};

export function excludeCategory(filters: Filter[], search?: boolean): Filter[] {
  return filters.filter((filter: Filter) => {
    if (search) {
      return true;
    }

    return (
      filter.attributeCode !== 'category_id' &&
      filter.attributeCode !== 'category_uid'
    );
  });
}

export function getAggregationOptionLabel(label: string) {
  const { t } = useI18n();

  if (label === '0') {
    return t('messages.general.yes');
  }
  if (label === '1') {
    return t('messages.general.no');
  }
  return label;
}
