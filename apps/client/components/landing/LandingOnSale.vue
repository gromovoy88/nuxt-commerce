<script lang="ts" setup>
const { fetchProducts } = useProductApi();

const { data } = await fetchProducts({
  pageSize: 4,
  filters: { sale: { eq: '0' } }
});

const products = data?.items;
</script>

<template>
  <div
    v-if="products?.length"
    class="flex w-full flex-col space-y-8 px-5 py-10 md:px-8"
  >
    <ProductCarousel
      :products="products"
      :title="$t('messages.shop.onSale')"
      :link="'/'"
    />
  </div>
</template>
