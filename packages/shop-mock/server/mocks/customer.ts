import { faker } from '@faker-js/faker';
import type {
  Customer,
  CustomerAddress,
  CustomerOrder,
  CustomerOrderItem,
  CustomerOrderShipment,
  CustomerOrderTotal
} from '@thunder/types';
import { mockAddress, mockMoney } from './common';

// Mock for CustomerAddress
export const mockCustomerAddress = (): CustomerAddress => ({
  ...mockAddress(),
  id: faker.number.int(),
  company: faker.company.name(),
  defaultBilling: faker.datatype.boolean(),
  defaultShipping: faker.datatype.boolean()
});

// Mock for Customer
export const mockCustomer = (): Customer => ({
  defaultBilling: faker.string.uuid(),
  defaultShipping: faker.string.uuid(),
  dob: faker.date.past().toISOString().split('T')[0],
  email: faker.internet.email(),
  firstName: faker.person.firstName(),
  gender: faker.person.gender(),
  groupId: faker.number.int(),
  id: faker.number.int(),
  isSubscribed: faker.datatype.boolean(),
  lastName: faker.person.lastName(),
  middlename: faker.person.firstName(),
  prefix: faker.person.prefix(),
  suffix: faker.person.suffix(),
  taxvat: faker.finance.accountNumber()
});

// Mock for CustomerOrderItem
export const mockCustomerOrderItem = (): CustomerOrderItem => ({
  productName: faker.commerce.productName(),
  productSku: faker.string.uuid(),
  productUrlKey: faker.lorem.slug(),
  productSalePrice: mockMoney(),
  quantityOrdered: faker.number.int(),
  quantityShipped: faker.number.int(),
  quantityCanceled: faker.number.int(),
  quantityInvoiced: faker.number.int(),
  quantityRefunded: faker.number.int(),
  quantityReturned: faker.number.int()
});

// Mock for CustomerOrderShipment
export const mockCustomerOrderShipment = (): CustomerOrderShipment => ({
  trackingNumber: faker.string.uuid()
});

// Mock for CustomerOrderTotal
export const mockCustomerOrderTotal = (): CustomerOrderTotal => ({
  grandTotal: mockMoney()
});

// Mock for CustomerOrder
export const mockCustomerOrder = (): CustomerOrder => ({
  number: faker.string.uuid(),
  orderDate: faker.date.past().toISOString().split('T')[0],
  shipments: Array.from({ length: 3 }, mockCustomerOrderShipment),
  total: mockCustomerOrderTotal(),
  items: Array.from({ length: 3 }, mockCustomerOrderItem)
});
