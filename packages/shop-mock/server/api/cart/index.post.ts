import { mockCart } from '../../mocks';

export default defineEventHandler((event) => {
  console.log(event.context.body);
  return mockCart();
});
