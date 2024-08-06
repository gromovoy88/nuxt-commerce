import { faker } from '@faker-js/faker';
import type { StoreConfig } from '@thunder/types';

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
  catalogDefaultSortBy: 'name',
  gridPerPage: 24,
  rootCategoryUid: 'root',
  baseCurrencyCode: faker.finance.currencyCode()
});
