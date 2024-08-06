import { faker } from '@faker-js/faker';
import type { Review } from '@thunder/types';

// Mock for Review
export const mockReview = (): Review => ({
  averageRating: faker.number.float({ min: 0, max: 5 }),
  summary: faker.lorem.sentence(),
  text: faker.lorem.paragraph(),
  nickname: faker.internet.userName(),
  createdAt: faker.date.past().toISOString()
});
