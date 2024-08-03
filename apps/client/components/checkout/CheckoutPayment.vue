<script lang="ts" setup>
const { setPaymentMethod } = useCartApi();
const { data: cart, setCart } = useCart();
const { availablePaymentMethods } = useCheckout();
const { getCartId } = useCartToken();
const { showError } = useUiErrorHandler();

const emit = defineEmits<{ 'set-payment-method': [] }>();

function isPaymentMethodActive(code?: string): boolean {
  if (!code) {
    return false;
  }

  return code === cart.value?.selectedPaymentMethod?.code;
}

async function selectPaymentMethod(code: string) {
  const { data, error } = await setPaymentMethod(getCartId(), code);

  if (!data) {
    showError(error?.message);
    return;
  }

  setCart(data);
  emit('set-payment-method');
}
</script>

<template>
  <div class="container mx-auto">
    <div class="mt-6 space-y-8">
      <CheckoutPaymentMethod
        v-for="method in availablePaymentMethods"
        :key="method.code"
        :method-code="method.code ?? ''"
        :method-title="method.title ?? ''"
        :is-active="isPaymentMethodActive(method.code)"
        @select-method="selectPaymentMethod"
      />
    </div>
  </div>
</template>
