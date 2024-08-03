<script setup lang="ts">
import type { Product } from '@thunder/types';

const { product } = defineProps<{
  product: Product;
}>();

const { addProductToWishlist } = useWishlistApi();
const localePath = useLocalePath();
const { t } = useI18n();
const { addItemAndUpdateCart } = useCartItem();
const { showSuccess } = useUiNotification();
const { showError } = useUiErrorHandler();

async function addToCart({ sku, quantity }: { sku: string; quantity: number }) {
  try {
    await addItemAndUpdateCart([
      {
        sku,
        quantity
      }
    ]);
    showSuccess(
      t('messages.shop.productAddedToCart').replace('%1', product?.name || '')
    );
  } catch (error) {
    showError(error);
    navigateTo({
      path: urlKey.value
    });
  }
}

async function addToWishlist({ sku }: { sku: string }) {
  try {
    if (sku) {
      await addProductToWishlist(sku);
      showSuccess(
        t('messages.wishlist.successAdded').replace('%1', product.name ?? '')
      );
    }
  } catch (error) {
    showError(error);
  }
}

const urlKey = computed(() => localePath(getProductUrl(product.urlKey ?? '')));
</script>

<template>
  <NuxtLink :title="product.name" :to="urlKey">
    <ProductCard
      :product="product"
      @add-to-cart="addToCart"
      @add-to-wishlist="addToWishlist"
    />
  </NuxtLink>
</template>
