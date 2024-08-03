<script lang="ts" setup>
const { fetchProductGrouped } = useProductApi();
const props = defineProps<{
  sku: string;
}>();

const { data } = await fetchProductGrouped(props.sku);

const products = data.value.products;
</script>

<template>
  <div v-if="products">Grouped options</div>
</template>
