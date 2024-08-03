<script lang="ts" setup>
const { productUrlKey } = defineProps<{
  productUrlKey: string;
}>();

const { fetchProductCrosssel } = useProductApi();

const { data } = await fetchProductCrosssel(productUrlKey);
</script>

<template>
  <div v-if="data?.length" class="flex w-full flex-col space-y-8">
    <BaseTypography variant="heading">
      <h2>
        {{ $t('messages.shop.moreChoices') }}
      </h2>
    </BaseTypography>

    <div>
      <!-- @vue-ignore -->
      <ProductCarousel :products="data" />
    </div>
  </div>
</template>
