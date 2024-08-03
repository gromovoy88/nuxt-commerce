<script lang="ts" setup>
import type { CustomerOrderItem } from '@thunder/types';

const { item } = defineProps<{
  item: CustomerOrderItem;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 border-b p-2">
    <BaseTypography variant="caption" class="flex flex-col">
      <span>{{ item.productName }}</span>
      <span>{{ item.quantityOrdered }}</span>
      <ProductPrice :price="item.productSalePrice" />
    </BaseTypography>
  </div>
</template>
