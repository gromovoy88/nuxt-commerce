<script lang="ts" setup>
const { productUrlKey } = defineProps<{
  productUrlKey: string;
}>();

const { fetchProductList } = useProductList();

const { data } = await useAsyncData('cross-sell-products', () =>
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
    <BaseTypography variant="heading">
      <h2>
        {{ $t('messages.shop.moreChoices') }}
      </h2>
    </BaseTypography>
    <div>
      <ProductCarousel :products="data.items" />
    </div>
  </div>
</template>
