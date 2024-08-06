import { mockReview } from '../../mocks';

export default defineEventHandler(() => Array.from({ length: 3 }, mockReview));
