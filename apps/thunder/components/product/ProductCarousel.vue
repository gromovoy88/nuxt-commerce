<script lang="ts" setup>
import type { Product } from '@thunder/types';

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div v-if="products.length">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      <ListingItem
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>
