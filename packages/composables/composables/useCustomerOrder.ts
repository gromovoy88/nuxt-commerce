import type { CustomerOrder, PaginableInput } from '@thunder/types';

export interface UseCustomerOrder {
  fetchOrders: (input?: PaginableInput) => Promise<CustomerOrder[]>;
}

export function useCustomerOrder(): UseCustomerOrder {
  async function fetchOrders(input?: PaginableInput): Promise<CustomerOrder[]> {
    return await $fetch('/api/account/customer/orders', {
      query: input
    });
  }

  return {
    fetchOrders
  };
}
