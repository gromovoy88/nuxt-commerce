import { mockCart } from '../../mocks';

export default defineEventHandler((event) => {
  console.log(event.context.params);
  return mockCart();
});
