<script lang="ts" setup>
const { fetchProductList } = useProductList();

const { data } = await useAsyncData('bestseller-products', () =>
  fetchProductList({
    pageSize: 4,
    filters: { price: { from: '20', to: '30' } }
  })
);
</script>

<template>
  <div v-if="data?.items?.length" class="flex w-full flex-col space-y-8">
    <BaseTypography variant="heading">
      <h2>
        {{ $t('messages.shop.bestsellers') }}
      </h2>
    </BaseTypography>
    <div>
      <ProductCarousel :products="data.items" />
    </div>
  </div>
</template>
