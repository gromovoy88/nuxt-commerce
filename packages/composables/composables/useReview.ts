import type {
  Review,
  PaginableInput,
  AddReviewInput,
  Rating
} from '@thunder/types';

export interface UseReview {
  fetchReviews: (
    productId: string,
    input?: PaginableInput
  ) => Promise<Review[]>;
  addReview: (productId: string, input: AddReviewInput) => Promise<Review>;
  fetchReviewRating: () => Promise<Rating[]>;
}

export function useReview(): UseReview {
  async function fetchReviews(
    productId: string,
    input?: PaginableInput
  ): Promise<Review[]> {
    return await $fetch(`/api/reviews/${productId}`, {
      query: input
    });
  }

  async function addReview(
    productId: string,
    input: AddReviewInput
  ): Promise<Review> {
    return await $fetch(`/api/review/add`, {
      method: 'POST',
      body: {
        productId,
        input
      }
    });
  }

  async function fetchReviewRating(): Promise<Rating[]> {
    return await $fetch(`/api/review/rating`);
  }

  return {
    fetchReviews,
    addReview,
    fetchReviewRating
  };
}
