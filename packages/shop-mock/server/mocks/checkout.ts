import { faker } from '@faker-js/faker';
import type { CheckoutAgreement, CheckoutOrder } from '@thunder/types';

// Mock for CheckoutAgreement
export const mockCheckoutAgreement = (): CheckoutAgreement => ({
  agreementId: faker.number.int(),
  checkboxText: faker.lorem.words(),
  content: faker.lorem.paragraphs(),
  mode: faker.lorem.word(),
  name: faker.company.companyName()
});

// Mock for CheckoutOrder
export const mockCheckoutOrder = (): CheckoutOrder => ({
  number: faker.string.uuid()
});
