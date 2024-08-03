<script lang="ts" setup>
import type { Product } from '@thunder/types';

defineProps<{
  products: Product[];
  title?: string;
  link?: string;
}>();
</script>

<template>
  <div v-if="products.length">
    <div class="mb-8 flex items-center justify-between">
      <BaseTypography v-if="title" variant="subtitle">
        <span>
          {{ title }}
        </span>
      </BaseTypography>
      <NuxtLink v-if="link">
        <UButton
          color="primary"
          variant="solid"
          size="md"
          type="submit"
          aria-label="See more"
          label="See more"
        ></UButton>
      </NuxtLink>
    </div>
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4"
    >
      <ListingItem
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>
