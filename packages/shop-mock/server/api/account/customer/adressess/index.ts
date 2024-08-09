import { mockCustomerAddress } from '../../../../mocks';

export default defineEventHandler(() =>
  Array.from({ length: 3 }, mockCustomerAddress)
);
