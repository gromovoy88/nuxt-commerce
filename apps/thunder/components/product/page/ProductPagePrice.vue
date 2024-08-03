<script lang="ts" setup>
import type { ProductPage } from '@thunder/types';

const { product } = defineProps<{
  product: ProductPage;
}>();

const productPrice = computed(() => product.priceRange.minPrice);
</script>

<template>
  <div v-if="productPrice" class="text-lg font-semibold">
    <div v-if="productPrice.discount && productPrice.regularPrice">
      <span class="mt-4 flex gap-4 text-xl font-semibold leading-5">
        <ProductPrice :price="productPrice.finalPrice" />
        <ProductPrice
          class="text-gray-600 line-through"
          :price="productPrice.regularPrice"
        />
      </span>
    </div>
    <div v-else>
      <span class="mt-4 text-xl font-semibold leading-5">
        <ProductPrice :price="productPrice.finalPrice" />
      </span>
    </div>
  </div>
</template>
