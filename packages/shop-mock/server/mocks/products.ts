// Mock for Product
import { faker } from '@faker-js/faker';
import type {
  Filter,
  FilterOption,
  Product,
  ProductList,
  ProductPage,
  SortField
} from '@thunder/types';
import { mockImage, mockPageInfo, mockPriceRange } from './common';
import { mockCategoryItem } from './category';
import { DEFAULT_SORT_BY, SORT_FIELD_OPTIONS } from './const';

export const mockProduct = (): Product => ({
  type: faker.commerce.productMaterial(),
  name: faker.commerce.productName(),
  image: mockImage(),
  thumbnail: mockImage(),
  urlKey: faker.lorem.slug(),
  sku: faker.string.uuid(),
  shortDescription: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  priceRange: mockPriceRange(),
  ratingSummary: faker.number.float({ min: 0, max: 5 }),
  reviewCount: faker.number.int(),
  sale: faker.datatype.boolean()
});

// Mock for ProductPage
export const mockProductPage = (): ProductPage => ({
  ...mockProduct(),
  mediaGallery: Array.from({ length: 5 }, mockImage),
  categories: Array.from({ length: 3 }, mockCategoryItem)
});

// Mock for FilterOption
export const mockFilterOption = (): FilterOption => ({
  label: faker.lorem.word(),
  value: faker.lorem.word(),
  count: faker.number.int({ min: 1, max: 5 })
});

// Mock for Filter
export const mockFilter = (): Filter => ({
  label: faker.lorem.word(),
  attributeCode: faker.lorem.word(),
  count: faker.number.int(3),
  options: Array.from({ length: 3 }, mockFilterOption)
});

// Mock for SortField
export const mockSortField = (): SortField => ({
  default: DEFAULT_SORT_BY,
  options: SORT_FIELD_OPTIONS
});

// Mock for ProductList
export const mockProductList = (): ProductList => ({
  items: Array.from({ length: 20 }, mockProduct),
  filters: Array.from({ length: 3 }, mockFilter),
  sort: mockSortField(),
  pageInfo: mockPageInfo(),
  totalCount: faker.number.int(20)
});
