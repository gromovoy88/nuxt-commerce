import { mockRating } from '../../../mocks';

export default defineEventHandler(() =>
  Array.from({ length: 3 }, () => mockRating)
);
