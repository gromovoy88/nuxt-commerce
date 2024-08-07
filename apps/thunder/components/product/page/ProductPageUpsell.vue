<script lang="ts" setup>
const { productUrlKey } = defineProps<{
  productUrlKey: string;
}>();

const { fetchProductList } = useProductList();

const { data } = await useAsyncData('upsell-products', () =>
  fetchProductList({
    filters: {
      productUrlKey: {
        eq: productUrlKey
      }
    }
  })
);
</script>

<template>
  <div v-if="data?.items?.length" class="flex w-full flex-col space-y-8">
    <BaseTypography variant="heading" color="text-gray-800">
      <h2>
        {{ $t('messages.shop.youMayLike') }}
      </h2>
    </BaseTypography>
    <div>
      <ProductCarousel :products="data.items" />
    </div>
  </div>
</template>
