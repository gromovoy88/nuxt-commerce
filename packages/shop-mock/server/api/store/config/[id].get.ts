import { mockStoreConfig } from '../../../mocks';

export default defineEventHandler((event) => {
  console.log(event.context.params);
  return mockStoreConfig();
});
