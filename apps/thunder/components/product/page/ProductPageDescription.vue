<script lang="ts" setup>
import type { ProductPage } from '@thunder/types';

const { product } = defineProps<{
  product: ProductPage;
}>();
</script>

<template>
  <div class="product-description xl:pr-48">
    <BaseTypography>
      <div v-html="product.description" />
    </BaseTypography>
  </div>
</template>

<style lang="postcss">
.product-description {
  p,
  ul,
  ol {
    @apply mb-4;
  }
}
</style>
