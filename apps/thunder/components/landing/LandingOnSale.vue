<script lang="ts" setup>
const { fetchProducts } = useProductApi();
const { data } = await fetchProducts({
  pageSize: 4,
  filters: { sale: { eq: '1' } }
});

const products = data?.items;
</script>

<template>
  <div v-if="products?.length" class="flex w-full flex-col space-y-8">
    <BaseTypography variant="heading">
      <h2>
        {{ $t('messages.shop.onSale') }}
      </h2>
    </BaseTypography>
    <div>
      <ProductCarousel :products="products" />
    </div>
  </div>
</template>
