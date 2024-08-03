import type {
  AvailableShippingMethod,
  PaymentMethod,
  ShippingMethod,
  CartBillingAddress
} from '@thunder/types';

export interface UseCheckout {
  billingAddress: ComputedRef<CartBillingAddress | null>;
  selectedShippingMethod: ComputedRef<ShippingMethod | null>;
  selectedPaymentMethod: ComputedRef<PaymentMethod | null>;
  availableShippingMethods: ComputedRef<AvailableShippingMethod[]>;
  availablePaymentMethods: ComputedRef<PaymentMethod[]>;
}

export function useCheckout(): UseCheckout {
  const { data: cart } = useCart();

  const billingAddress = computed(() => cart.value?.billingAddress ?? null);

  const selectedPaymentMethod = computed(() => {
    return cart.value?.selectedPaymentMethod ?? null;
  });

  const selectedShippingMethod = computed(() => {
    return cart.value?.shippingAddresses?.[0]?.selectedShippingMethod ?? null;
  });

  const availableShippingMethods = computed(
    () => cart.value?.shippingAddresses?.[0]?.availableShippingMethods ?? []
  );

  const availablePaymentMethods = computed(
    () => cart?.value?.availablePaymentMethods ?? []
  );

  return {
    billingAddress,
    selectedShippingMethod,
    selectedPaymentMethod,
    availableShippingMethods,
    availablePaymentMethods
  };
}
