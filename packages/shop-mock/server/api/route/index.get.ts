import { mockRoute } from '../../mocks';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return mockRoute(body.route);
});
