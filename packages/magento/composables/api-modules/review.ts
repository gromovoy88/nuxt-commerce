import type { Rating, Review } from '@thunder/types';
import { ProductReviewsList } from '../../graphql/queries/productReviewsList';
import { ProductReviewRatingMetadata } from '../../graphql/queries/productReviewRatingMetadata';
import { CreateProductReview } from '../../graphql/mutations/createProductReview';
import type { AddReviewInput, FetchResult } from '../../types';
import { mapRating, mapReview } from '../../utils/mappers';

export function useReviewApi() {
  async function fetchReviews(
    sku: string
  ): Promise<FetchResult<Review[], Error>> {
    const { data, error } = await useAsyncQuery(ProductReviewsList, {
      pageSize: 20,
      currentPage: 1,
      filters: {
        sku: {
          eq: sku
        }
      }
    });

    return {
      data:
        data.value.products?.items?.[0]?.reviews.items.map((review) =>
          mapReview(review)
        ) ?? null,
      error: error.value
    };
  }

  async function fetchReviewMetadata(): Promise<FetchResult<Rating[], Error>> {
    const { data, error } = await useAsyncQuery(ProductReviewRatingMetadata);

    return {
      data: mapRating(data.value),
      error: error.value
    };
  }

  async function addReview(
    input: AddReviewInput
  ): Promise<FetchResult<Review, Error>> {
    const { ratings, ...data } = input;
    const { mutate, error } = useMutation(CreateProductReview);

    const response = await mutate({
      ...data,
      ratings: ratings.map(({ ratingId, ratingValueId }) => ({
        id: ratingId,
        value_id: ratingValueId
      }))
    });

    return {
      data: mapReview(response?.data?.createProductReview?.review ?? null),
      error: error.value
    };
  }

  return {
    fetchReviews,
    fetchReviewMetadata,
    addReview
  };
}
