import type { LoginUserInput } from '@thunder/types';

export interface UseAuth {
  login: (input: LoginUserInput) => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuth {
  const token = useState<string>(() => '');
  const { resetCustomer } = useCustomer();

  function onLogin(tokenData: string): void {
    token.value = tokenData;
  }

  function onLogout(): void {
    token.value = '';
  }

  async function login(input: LoginUserInput): Promise<void> {
    const { data, error } = await useFetch('/api/account/login', {
      method: 'POST',
      body: input
    });

    if (!data.value?.token) {
      throw new Error(error.value?.message || 'The user cannot log in.');
    }

    onLogin(`Bearer ${data.value.token}`);
  }

  async function logout(): Promise<void> {
    const { data, error } = await useFetch('/api/account/logout', {
      method: 'POST'
    });

    if (!data.value) {
      throw new Error(error.value?.message || 'The user cannot logged out.');
    }

    resetCustomer();
    onLogout();
  }

  return {
    login,
    logout
  };
}
