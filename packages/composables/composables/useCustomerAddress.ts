import type {
  CustomerAddress,
  CustomerAddressInput,
  PaginableInput
} from '@thunder/types';

export interface UseCustomerAddress {
  fetchCustomerAddresses: (
    input?: PaginableInput
  ) => Promise<CustomerAddress[]>;
  addCustomerAddress: (input: CustomerAddressInput) => Promise<CustomerAddress>;
  updateCustomerAddress: (
    id: number,
    input: CustomerAddressInput
  ) => Promise<CustomerAddress>;
}

export function useCustomerAddress(): UseCustomerAddress {
  async function fetchCustomerAddresses(
    input?: PaginableInput
  ): Promise<CustomerAddress[]> {
    return await $fetch('/api/account/customer/addresses', {
      query: input
    });
  }

  async function updateCustomerAddress(
    id: number,
    input: CustomerAddressInput
  ): Promise<CustomerAddress> {
    return await $fetch('/api/account/customer/address/update', {
      method: 'POST',
      body: {
        id,
        input
      }
    });
  }

  async function addCustomerAddress(
    input: CustomerAddressInput
  ): Promise<CustomerAddress> {
    return await $fetch('/api/account/customer/address/add', {
      method: 'POST',
      body: {
        input
      }
    });
  }

  return {
    fetchCustomerAddresses,
    addCustomerAddress,
    updateCustomerAddress
  };
}
