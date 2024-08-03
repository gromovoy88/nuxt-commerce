<script setup lang="ts">
const { loading } = useCartItem();
const { t } = useI18n();

const addToCartButtonText = computed(() =>
  loading.value ? t('messages.shop.adding') : t('messages.shop.addToCart')
);
</script>

<template>
  <UButton
    color="primary"
    variant="solid"
    size="xl"
    block
    type="submit"
    :loading="loading"
    :label="addToCartButtonText"
  />
</template>
