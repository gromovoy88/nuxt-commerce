import { faker } from '@faker-js/faker';
import type { Wishlist, WishlistItem } from '@thunder/types';
import { mockProduct } from './products';

// Mock for WishlistItem
export const mockWishlistItem = (): WishlistItem => ({
  id: faker.string.uuid(),
  product: mockProduct()
});

// Mock for Wishlist
export const mockWishlist = (): Wishlist => ({
  id: faker.string.uuid(),
  itemsCount: faker.number.int(),
  items: Array.from({ length: 3 }, mockWishlistItem)
});
