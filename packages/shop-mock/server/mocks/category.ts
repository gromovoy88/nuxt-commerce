import { faker } from '@faker-js/faker';
import type {
  CategoryBreadcrumb,
  CategoryItem,
  MegaMenu,
  MegaMenuItem
} from '@thunder/types';

// Mock for CategoryBreadcrumb
export const mockCategoryBreadcrumb = (): CategoryBreadcrumb => ({
  categoryUid: faker.string.uuid(),
  categoryName: faker.commerce.department(),
  categoryUrlPath: faker.lorem.slug(),
  categoryLevel: faker.number.int({ min: 1, max: 5 })
});

// Mock for CategoryItem
export const mockCategoryItem = (): CategoryItem => ({
  image: faker.image.url(),
  name: faker.commerce.productName(),
  path: faker.lorem.slug(),
  urlKey: faker.lorem.slug(),
  uid: faker.string.uuid(),
  position: faker.number.int(),
  description: faker.lorem.paragraph(),
  breadcrumbs: Array.from({ length: 3 }, mockCategoryBreadcrumb)
});

// Mock for MegaMenuItem
export const mockMegaMenuItem = (): MegaMenuItem => ({
  name: faker.commerce.department(),
  productCount: faker.number.int(),
  uid: faker.string.uuid(),
  includeInMenu: faker.datatype.boolean(),
  position: faker.number.int(),
  level: faker.number.int({ min: 1, max: 3 }),
  urlPath: faker.lorem.slug()
});

// Mock for MegaMenu
export const mockMegaMenu = (): MegaMenu => ({
  ...mockMegaMenuItem(),
  children: Array.from({ length: 8 }, mockMegaMenuItem)
});
