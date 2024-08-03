<script lang="ts" setup>
import type { ShippingMethod } from '@thunder/types';

const { shippingMethod } = defineProps<{
  shippingMethod: ShippingMethod;
}>();

const methodLabel = computed(
  () => `${shippingMethod.carrierTitle} - ${shippingMethod.methodTitle}`
);
</script>

<template>
  <CheckoutSummaryPriceItem
    :label="methodLabel"
    :price="shippingMethod.amount"
  />
</template>
