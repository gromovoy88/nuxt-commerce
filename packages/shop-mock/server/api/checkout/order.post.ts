import { ORDER_ID } from '../../mocks/const';

export default defineEventHandler((event) => {
  console.log(event.context.params);
  return ORDER_ID;
});
