import { mockStoreConfig } from '../../mocks';

export default defineEventHandler(() =>
  Array.from({ length: 2 }, mockStoreConfig)
);
