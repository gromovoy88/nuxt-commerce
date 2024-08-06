import { faker } from '@faker-js/faker';
import type {
  Address,
  Breadcrumb,
  Country,
  Discount,
  Image,
  Money,
  PageInfo,
  Price,
  PriceRange,
  Rating,
  RatingValue,
  Region
} from '@thunder/types';

// Mock for Money
export const mockMoney = (): Money => ({
  currency: faker.finance.currencyCode(),
  value: faker.number.float()
});

// Mock for Image
export const mockImage = (): Image => ({
  url: faker.image.url(),
  label: faker.lorem.word()
});

// Mock for Region
export const mockRegion = (): Region => ({
  code: faker.location.state(true),
  id: faker.number.int(),
  name: faker.location.state()
});

// Mock for Country
export const mockCountry = (): Country => ({
  fullNameLocale: faker.location.country(),
  twoLetterAbbreviation: faker.location.countryCode(),
  threeLetterAbbreviation: faker.location.countryCode().toUpperCase(),
  availableRegions: Array.from({ length: 3 }, mockRegion)
});

// Mock for Breadcrumb
export const mockBreadcrumb = (): Breadcrumb => ({
  title: faker.lorem.words(),
  link: faker.internet.url()
});

// Mock for Discount
export const mockDiscount = (): Discount => ({
  amountOff: faker.number.int(),
  percentOff: faker.number.float({ min: 0, max: 100 })
});

// Mock for Price
export const mockPrice = (): Price => ({
  regularPrice: mockMoney(),
  discount: mockDiscount(),
  finalPrice: mockMoney()
});

// Mock for PriceRange
export const mockPriceRange = (): PriceRange => ({
  minPrice: mockPrice(),
  maxPrice: mockPrice()
});

// Mock for PageInfo
export const mockPageInfo = (): PageInfo => ({
  currentPage: faker.number.int({ min: 1, max: 10 }),
  totalPages: faker.number.int({ min: 1, max: 10 })
});

// Mock for Address
export const mockAddress = (): Address => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  street: Array.from({ length: 2 }, faker.location.streetAddress),
  city: faker.location.city(),
  country: faker.location.country(),
  region: faker.location.state(),
  postcode: faker.location.zipCode(),
  telephone: faker.phone.number()
});

// Mock for RatingValue
export const mockRatingValue = (): RatingValue => ({
  id: faker.string.uuid(),
  value: faker.lorem.word()
});

// Mock for Rating
export const mockRating = (): Rating => ({
  id: faker.string.uuid(),
  name: faker.commerce.productAdjective(),
  values: Array.from({ length: 5 }, mockRatingValue)
});
