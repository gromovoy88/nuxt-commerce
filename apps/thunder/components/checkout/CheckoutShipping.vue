<script lang="ts" setup>
import type { AvailableShippingMethod } from '@thunder/types';

const { showError } = useUiErrorHandler();
const { data: cart, setShippingMethod } = useCart();
const { availableShippingMethods, selectedShippingMethod } = useCheckout();
const { getCartId } = useCartToken();

const emit = defineEmits<{ 'set-shipping-method': [] }>();

function isShippingMethodActive(item: AvailableShippingMethod): boolean {
  return (
    item?.carrierCode === selectedShippingMethod.value?.carrierCode &&
    item?.methodCode === selectedShippingMethod.value?.methodCode
  );
}

async function selectShippingMethod(
  item: AvailableShippingMethod
): Promise<void> {
  if (!item.carrierCode || !item.methodCode || isShippingMethodActive(item)) {
    return;
  }

  const data = await setShippingMethod(
    getCartId(),
    `${item.carrierCode}_${item.methodCode}`
  );

  if (!data) {
    showError('Unable to set the shipping method');
    return;
  }

  cart.value = data;
  emit('set-shipping-method');
}
</script>

<template>
  <div>
    <div v-if="availableShippingMethods.length" class="mt-6 space-y-8">
      <CheckoutShippingItem
        v-for="(item, index) in availableShippingMethods"
        :key="index"
        :is-active="isShippingMethodActive(item)"
        :item="item"
        @select-method="selectShippingMethod"
      />
    </div>
    <div v-else>
      <BaseTypography class="mt-4">
        <span>{{ $t('messages.checkout.noShippingMethods') }}</span>
      </BaseTypography>
    </div>
  </div>
</template>
