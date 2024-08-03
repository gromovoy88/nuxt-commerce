<script lang="ts" setup>
const props = defineProps<{
  sku: string;
}>();

const { fetchProductBundle } = useProductApi();
const { data } = await fetchProductBundle(props.sku);

const products = data.value.products;
const bundleProduct = products?.items?.[0];
</script>

<template>
  <div v-if="bundleProduct && isTypename(bundleProduct, ['BundleProduct'])">
    <ProductBundleItems :product="bundleProduct" />
  </div>
</template>
