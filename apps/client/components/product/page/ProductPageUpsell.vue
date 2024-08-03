<script lang="ts" setup>
const { productUrlKey } = defineProps<{
  productUrlKey: string;
}>();

const { fetchProductUpsell } = useProductApi();

const { data } = await fetchProductUpsell(productUrlKey);
</script>

<template>
  <div v-if="data?.length" class="flex w-full flex-col space-y-8">
    <BaseTypography variant="heading" color="text-gray-800">
      <h2>
        {{ $t('messages.shop.youMayLike') }}
      </h2>
    </BaseTypography>

    <div>
      <!-- @vue-ignore -->
      <ProductCarousel :products="data" />
    </div>
  </div>
</template>
