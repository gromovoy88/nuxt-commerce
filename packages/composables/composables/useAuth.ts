import type { LoginUserInput } from '@thunder/magento/types';

export interface UseAuth {
  login: (input: LoginUserInput) => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuth {
  const { onLogin, onLogout } = useApollo();
  const { resetCustomer } = useCustomer();
  const { loginCustomer } = useCustomerApi();

  async function login(input: LoginUserInput): Promise<void> {
    const { data, error } = await loginCustomer(input);

    if (!data?.token) {
      throw new Error(error?.message || 'The user cannot log in.');
    }

    await onLogin(`Bearer ${data.token}`);
  }

  async function logout(): Promise<void> {
    await onLogout();
    resetCustomer();
  }

  return {
    login,
    logout
  };
}
