<script lang="ts" setup>
import type { ProductsProps } from '@thunder/pagebuilder/content-types/products/types';

const props = defineProps<ProductsProps>();

const { data: storeConfig } = useStoreConfig();
const productUrlSuffix = storeConfig.value?.productUrlSuffix;

const urlKeys = props.pathNames.map((pathName: string) => {
  const slug = pathName.split('/').pop() ?? '';
  return productUrlSuffix ? slug.replace(productUrlSuffix, '') : slug;
});

const { fetchProducts } = useProductApi();
const { data } = await fetchProducts({
  pageSize: urlKeys.length,
  filters: { url_key: { in: urlKeys } }
});
</script>

<template>
  <div v-if="data">
    <ProductCarousel :products="data.items" />
  </div>
</template>
