import { mockCategoryItem } from '../../mocks';

export default defineEventHandler(() =>
  Array.from({ length: 10 }, mockCategoryItem)
);
