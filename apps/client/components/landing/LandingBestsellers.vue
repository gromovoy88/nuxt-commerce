<script lang="ts" setup>
const { fetchProducts } = useProductApi();

const { data } = await fetchProducts({
  pageSize: 4,
  filters: { price: { from: '10', to: '100' } }
});

const products = data?.items;
</script>

<template>
  <section
    v-if="products?.length"
    class="flex w-full flex-col space-y-8 px-5 py-10 md:px-8"
  >
    <ProductCarousel
      :products="products"
      :title="$t('messages.shop.bestsellers')"
      :link="'/'"
    />
  </section>
</template>
