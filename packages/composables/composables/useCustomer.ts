import type {
  Cart,
  Customer,
  RegisterAccountInput,
  UpdateUserInput
} from '@thunder/types';

export interface UseCustomer {
  data: Ref<Customer | null>;
  resetCustomer: () => void;
  setCustomer: (payload: Customer) => void;
  fetchCustomer: () => Promise<Customer>;
  fetchCustomerCart: () => Promise<Cart>;
  registerCustomer: (input: RegisterAccountInput) => Promise<Customer>;
  changeCustomerPassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<Customer>;
  changeCustomerEmail: (email: string) => Promise<Customer>;
  changeCustomerData: (input: UpdateUserInput) => Promise<Customer>;
}

export function useCustomer(): UseCustomer {
  const data = useState<Customer | null>('customerData', () => null);

  function setCustomer(payload: Customer): void {
    data.value = payload;
  }

  function resetCustomer(): void {
    data.value = null;
  }

  async function fetchCustomer(): Promise<Customer> {
    return await $fetch('/api/account/customer');
  }

  async function registerCustomer(
    input: RegisterAccountInput
  ): Promise<Customer> {
    return await $fetch('/api/account/register', {
      method: 'POST',
      body: {
        input
      }
    });
  }

  async function changeCustomerPassword(
    currentPassword: string,
    newPassword: string
  ): Promise<Customer> {
    return await $fetch('/api/account/customer/change-password', {
      method: 'POST',
      body: {
        currentPassword,
        newPassword
      }
    });
  }

  async function changeCustomerEmail(email: string): Promise<Customer> {
    return await $fetch('/api/account/customer/change-email', {
      method: 'POST',
      body: {
        email
      }
    });
  }

  async function changeCustomerData(input: UpdateUserInput): Promise<Customer> {
    return await $fetch('/api/account/customer/change-email', {
      method: 'POST',
      body: {
        input
      }
    });
  }

  async function fetchCustomerCart(): Promise<Cart> {
    return await $fetch('/api/account/customer/cart');
  }

  return {
    data,
    registerCustomer,
    resetCustomer,
    setCustomer,
    fetchCustomer,
    fetchCustomerCart,
    changeCustomerPassword,
    changeCustomerEmail,
    changeCustomerData
  };
}
