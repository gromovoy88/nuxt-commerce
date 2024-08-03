<script lang="ts" setup>
import type { ProductPage } from '@thunder/types';

const { product } = defineProps<{
  product: ProductPage;
}>();

const { updateInput } = useAddToCartForm();

const quantity = ref(1);

function setAddToCartInput() {
  updateInput({
    quantity: quantity.value,
    sku: product.sku
  });
}

setAddToCartInput();

watch(quantity, () => {
  setAddToCartInput();
});
</script>

<template>
  <div class="flex w-full flex-col space-y-4">
    <div class="mb-4 flex items-center">
      <FormInputQty
        v-model="quantity"
        class="dark:border-primary bg-white px-2 dark:border dark:bg-transparent"
      />
    </div>
    <div class="flex items-center gap-4">
      <ProductPageAddToCartButton class="w-full flex-1 md:max-w-xs" />
      <slot name="secondary-actions" />
    </div>
  </div>
</template>
