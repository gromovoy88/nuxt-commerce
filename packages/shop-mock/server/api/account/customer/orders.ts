import { mockCustomerOrder } from '../../../mocks';

export default defineEventHandler((event) =>
  Array.from({ length: 3 }, mockCustomerOrder)
);
