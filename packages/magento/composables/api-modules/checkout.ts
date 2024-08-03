import type { CheckoutAgreement, CheckoutOrder } from '@thunder/types';
import { PlaceOrder } from '../../graphql/mutations/placeOrder';
import { GetAgreements } from '../../graphql/queries/getAgreements';
import type { FetchResult } from '../../types';

export function useCheckoutApi() {
  async function placeOrder(
    cartId: string
  ): Promise<FetchResult<CheckoutOrder, Error>> {
    const { mutate, error } = useMutation(PlaceOrder);

    const response = await mutate({
      cartId
    });

    return {
      data: response?.data?.placeOrder?.order.order_number
        ? { number: response.data.placeOrder.order.order_number }
        : null,
      error: error.value
    };
  }

  async function fetchAgreements(): Promise<
    FetchResult<CheckoutAgreement[], Error>
  > {
    const { data, error } = await useAsyncQuery(GetAgreements);

    return {
      data:
        data.value?.checkoutAgreements?.map((item) =>
          mapCheckoutAgreement(item)
        ) ?? null,
      error: error.value
    };
  }

  return {
    placeOrder,
    fetchAgreements
  };
}
