import { mockProductList } from '../../mocks';

export default defineEventHandler(() =>
  Array.from({ length: 20 }, mockProductList)
);
