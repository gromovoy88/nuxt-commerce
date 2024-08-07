import { faker } from '@faker-js/faker';
import type {
  AvailableShippingMethod,
  Cart,
  CartBillingAddress,
  CartDiscount,
  CartItem,
  CartItemPrices,
  CartPrices,
  CartShippingAddress,
  PaymentMethod,
  ShippingMethod
} from '@thunder/types';
import { mockAddress, mockMoney } from './common';
import { mockProduct } from './products';
import { CART_ID } from './const';

// Mock for PaymentMethod
export const mockPaymentMethod = (): PaymentMethod => ({
  code: faker.finance.creditCardNumber(),
  title: faker.finance.transactionType()
});

// Mock for ShippingMethod
export const mockShippingMethod = (): ShippingMethod => ({
  carrierCode: faker.string.uuid(),
  carrierTitle: faker.company.name(),
  methodCode: faker.string.uuid(),
  methodTitle: faker.company.name(),
  amount: mockMoney()
});

// Mock for AvailableShippingMethod
export const mockAvailableShippingMethod = (): AvailableShippingMethod => ({
  ...mockShippingMethod(),
  available: faker.datatype.boolean()
});

// Mock for CartBillingAddress
export const mockCartBillingAddress = (): CartBillingAddress => mockAddress();

// Mock for CartShippingAddress
export const mockCartShippingAddress = (): CartShippingAddress => ({
  availableShippingMethods: Array.from(
    { length: 3 },
    mockAvailableShippingMethod
  ),
  selectedShippingMethod: mockShippingMethod()
});

// Mock for CartItemPrices
export const mockCartItemPrices = (): CartItemPrices => ({
  price: mockMoney()
});

// Mock for CartItem
export const mockCartItem = (): CartItem => ({
  uid: faker.string.uuid(),
  quantity: faker.number.int(),
  product: mockProduct(),
  prices: mockCartItemPrices()
});

// Mock for CartDiscount
export const mockCartDiscount = (): CartDiscount => ({
  amount: mockMoney(),
  label: faker.lorem.words()
});

// Mock for CartPrices
export const mockCartPrices = (): CartPrices => ({
  subtotal: mockMoney(),
  grandTotal: mockMoney(),
  discount: Array.from({ length: 3 }, mockCartDiscount)
});

// Mock for Cart
export const mockCart = (): Cart => ({
  email: faker.internet.email(),
  id: CART_ID,
  isVirtual: faker.datatype.boolean(),
  items: Array.from({ length: 3 }, mockCartItem),
  prices: mockCartPrices(),
  totalQuantity: faker.number.int(3),
  billingAddress: mockCartBillingAddress(),
  shippingAddresses: Array.from({ length: 3 }, mockCartShippingAddress),
  selectedPaymentMethod: mockPaymentMethod(),
  availablePaymentMethods: Array.from({ length: 3 }, mockPaymentMethod)
});
