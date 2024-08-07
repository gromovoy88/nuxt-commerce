import { faker } from '@faker-js/faker';
import type { StoreConfig } from '@thunder/types';
import { DEFAULT_SORT_BY } from './const';

export const mockStoreConfig = (): StoreConfig => ({
  defaultDisplayCurrencyCode: faker.finance.currencyCode(),
  locale: 'en_US',
  secureBaseMediaUrl: faker.internet.url(),
  storeCode: 'default',
  storeGroupCode: 'default',
  storeGroupName: 'default',
  storeName: 'default',
  storeSortOrder: 0,
  productUrlSuffix: '',
  categoryUrlSuffix: '',
  catalogDefaultSortBy: DEFAULT_SORT_BY,
  gridPerPage: 24,
  rootCategoryUid: 'root',
  baseCurrencyCode: faker.finance.currencyCode()
});
