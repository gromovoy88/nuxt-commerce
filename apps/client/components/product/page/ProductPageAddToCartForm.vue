<script lang="ts" setup>
import type { ProductPage } from '@thunder/types';

const { product } = defineProps<{
  product: ProductPage;
}>();

const { t } = useI18n();
const { errors, input } = useAddToCartForm();
const { addItemAndUpdateCart } = useCartItem();
const { showSuccess, showNotification } = useUiNotification();
const { showError } = useUiErrorHandler();

async function submitAddToCartForm(): Promise<void> {
  if (errors.value.length) {
    showNotification(errors.value);
    return;
  }

  try {
    await addItemAndUpdateCart(input.value);

    showSuccess(
      t('messages.shop.productAddedToCart').replace('%1', product.name ?? '')
    );
  } catch (error) {
    showError(error);
  }
}
</script>

<template>
  <form class="w-full" @submit.prevent="submitAddToCartForm">
    <slot />
  </form>
</template>
