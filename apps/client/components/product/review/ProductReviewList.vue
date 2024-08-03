<script lang="ts" setup>
const props = defineProps<{
  productSku: string;
  productName: string;
}>();

const { fetchReviews } = useReviewApi();
const { data } = await fetchReviews(props.productSku);
</script>

<template>
  <div id="reviews" class="flex items-center justify-center">
    <div class="flex w-full flex-col items-start justify-start space-y-8">
      <div class="flex items-start justify-start">
        <BaseTypography variant="heading">
          <h2>
            {{ $t('messages.shop.reviews') }}
          </h2>
        </BaseTypography>
      </div>
      <div
        v-if="data?.length"
        class="flex w-full flex-col items-start justify-start rounded-lg bg-white p-8 shadow-sm"
      >
        <div class="flex w-full flex-col items-start justify-start md:p-8">
          <div
            v-for="(review, key) in data"
            :key="key"
            class="mb-4 w-full last:mb-0 md:mb-8"
          >
            <ProductReviewItem :review="review" />
          </div>
        </div>
      </div>
      <div
        v-else
        class="flex w-full flex-col items-start justify-start bg-gray-50 p-8"
      >
        <BaseTypography variant="subtitle" color="text-gray-800">
          <p>
            {{ $t('messages.shop.noReviews') }}
          </p>
        </BaseTypography>
      </div>
      <ProductReviewAdd :product-sku="productSku" :product-name="productName" />
    </div>
  </div>
</template>
