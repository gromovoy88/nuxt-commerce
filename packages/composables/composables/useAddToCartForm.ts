import type { CartItemInput } from '@thunder/types';

export interface UseAddToCartForm {
  input: Ref<CartItemInput[]>;
  errors: Ref<string[]>;
  setInput: (payload: CartItemInput) => void;
  updateInput: (payload: Partial<CartItemInput>) => void;
  setError: (message: string) => void;
  clearErrors: () => void;
}

export function useAddToCartForm(): UseAddToCartForm {
  const input = useState<CartItemInput[]>('addToCartFormInput', () => []);
  const errors = useState<string[]>('addToCartFormErrors', () => []);

  function setInput(payload: CartItemInput): void {
    const { sku, quantity, ...options } = payload;

    input.value = [{ sku, quantity, ...options }];
  }

  function updateInput(payload: Partial<CartItemInput>): void {
    let inputItemIndex = input.value.findIndex(
      (item: CartItemInput) => item.sku === payload.sku
    );

    if (inputItemIndex < 0) {
      inputItemIndex = 0;
    }

    input.value[inputItemIndex] = {
      ...input.value[inputItemIndex],
      ...payload
    };
  }

  function clearErrors(): void {
    errors.value = [];
  }

  function setError(message: string): void {
    errors.value.push(message);
  }

  return {
    input,
    errors,
    setInput,
    updateInput,
    setError,
    clearErrors
  };
}
