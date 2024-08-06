import { faker } from '@faker-js/faker';
import type {
  Route,
  RouteCategory,
  RouteData,
  RoutePage,
  RouteProduct
} from '@thunder/types';

// Mock for RouteData
export const mockRouteData = <T extends string>(type: T): RouteData<T> => ({
  type,
  redirectCode: faker.number.int({ min: 300, max: 399 }),
  relativeUrl: faker.internet.url()
});

// Mock for RoutePage
export const mockRoutePage = (): RoutePage => ({
  ...mockRouteData('Page'),
  id: faker.string.uuid(),
  urlKey: faker.lorem.slug()
});

// Mock for RouteProduct
export const mockRouteProduct = (): RouteProduct => ({
  ...mockRouteData('Product'),
  name: faker.commerce.productName(),
  urlKey: faker.lorem.slug()
});

// Mock for RouteCategory
export const mockRouteCategory = (): RouteCategory => ({
  ...mockRouteData('Category'),
  name: faker.commerce.department(),
  urlKey: faker.lorem.slug()
});

// Mock for Route
export const mockRoute = (type: string | undefined): Route => {
  switch (type) {
    case 'Page':
      return mockRoutePage();
    case 'Product':
      return mockRouteProduct();
    case 'Category':
      return mockRouteCategory();
  }
  return mockRoutePage();
};
