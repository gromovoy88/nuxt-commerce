<script setup lang="ts">
import type { ProductPage } from '@thunder/types';

const { product } = defineProps<{
  product: ProductPage;
}>();

const { data: breadcrumbs, setBreadcrumbs } = useBreadcrumbs();

const category = computed(
  () => product.categories[product.categories.length - 1] ?? null
);

function updateProductBreadcrumbs() {
  const categoryBreadcrumbs =
    category.value?.breadcrumbs?.map((breadcrumb) => ({
      title: breadcrumb.categoryName,
      link: getCategoryUrl(breadcrumb.categoryUrlPath)
    })) ?? [];

  setBreadcrumbs([
    ...categoryBreadcrumbs,
    { title: product.name ?? '', link: '' }
  ]);
}

updateProductBreadcrumbs();
</script>

<template>
  <BaseBreadcrumbs class="mb-6" :items="breadcrumbs" />
</template>
