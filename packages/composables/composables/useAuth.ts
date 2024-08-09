import type { LoginUserInput } from '@thunder/types';

export interface UseAuth {
  token: Ref<string>;
  login: (input: LoginUserInput) => Promise<void>;
  logout: () => Promise<void>;
  onLogin: (tokenData: string) => void;
  onLogout: () => void;
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
    const response = await $fetch('/api/account/login', {
      method: 'POST',
      body: input
    });

    if (!response.token) {
      throw new Error('The user cannot log in.');
    }

    onLogin(`Bearer ${response.token}`);
  }

  async function logout(): Promise<void> {
    const response = await $fetch('/api/account/logout', {
      method: 'POST'
    });

    if (!response) {
      throw new Error('The user cannot logged out.');
    }

    resetCustomer();
    onLogout();
  }

  return {
    token,
    login,
    logout,
    onLogin,
    onLogout
  };
}
