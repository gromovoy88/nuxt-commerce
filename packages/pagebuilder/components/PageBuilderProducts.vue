<script lang="ts" setup>
import type { ProductsProps } from '../content-types/products/types';

defineProps<ProductsProps>();
</script>

<template>
  <div>
    <NuxtLink v-for="(url, index) in pathNames" :key="index">
      {{ url }}
    </NuxtLink>
  </div>
</template>
