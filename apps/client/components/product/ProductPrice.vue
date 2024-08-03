<script lang="ts" setup>
import type { Money } from '@thunder/types';

const { price } = defineProps<{
  price: Money;
}>();

const { data: storeConfig } = useStoreConfig();
</script>

<template>
  <MoneyValue
    :currency="price.currency || storeConfig?.baseCurrencyCode || ''"
    :value="price.value ?? 0"
  />
</template>
