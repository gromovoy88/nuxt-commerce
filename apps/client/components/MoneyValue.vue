<script lang="ts" setup>
import type { Money } from '@thunder/types';

export type NumberFormatProps = Intl.NumberFormatOptions;
export type NumberFormat = Intl.NumberFormat;

const { currency, value } = defineProps<Money>();

const options: NumberFormatProps = {
  style: 'currency',
  currency
};
const { formatNumber } = useNumberFormat(options);
</script>

<template>
  <div class="flex w-full items-center">
    <span>{{ formatNumber().format(value) }}</span>
  </div>
</template>
