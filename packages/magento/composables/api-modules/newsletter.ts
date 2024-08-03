import type { FetchResult, NewsletterStatusResponse } from '../../types';
import { SubscribeGuestNewsletter } from '../../graphql/mutations/subscribeGuestNewsletter';

export function useNewsletterApi() {
  async function subscribeGuestToNewsletter(
    email: string
  ): Promise<FetchResult<NewsletterStatusResponse, Error>> {
    const { mutate, error } = useMutation(SubscribeGuestNewsletter);

    const response = await mutate({ email });

    return {
      data: {
        status: `${response?.data?.subscribeEmailToNewsletter?.status}`
      },
      error: error.value
    };
  }

  return {
    subscribeGuestToNewsletter
  };
}
