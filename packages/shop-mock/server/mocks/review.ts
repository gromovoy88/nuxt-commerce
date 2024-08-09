import { faker } from '@faker-js/faker';
import type { Rating, Review } from '@thunder/types';

export const mockRating: Rating = {
  id: faker.hacker.adjective(),
  name: 'Customer Satisfaction',
  values: [
    { id: 'value1', value: 'Excellent' },
    { id: 'value2', value: 'Good' },
    { id: 'value3', value: 'Average' },
    { id: 'value4', value: 'Poor' },
    { id: 'value5', value: 'Terrible' }
  ]
};

// Mock for Review
export const mockReview = (): Review => ({
  averageRating: faker.number.float({ min: 0, max: 5 }),
  summary: faker.lorem.sentence(),
  text: faker.lorem.paragraph(),
  nickname: faker.internet.userName(),
  createdAt: faker.date.past().toISOString()
});
