<script lang="ts" setup>
const { fetchProductBundle } = useProductApi();

const props = defineProps<{
  sku: string;
}>();

const { data } = await fetchProductBundle(props.sku);

const products = data.value.products;
const bundleProduct = products?.items?.[0];
</script>

<template>
  <div v-if="bundleProduct && isTypename(bundleProduct, ['BundleProduct'])">
    <ProductBundleItems :product="bundleProduct" />
  </div>
</template>
