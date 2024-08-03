<script lang="ts" setup>
const { cartItems } = useCartItem();
const localePath = useLocalePath();
</script>

<template>
  <div>
    <div class="flex flex-1">
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-50">
        {{ $t('messages.shop.items') }}
      </h3>
      <div class="flex-auto" />
      <NuxtLink
        title="Edit cart"
        :to="localePath(paths.cart)"
        class="cursor-pointer text-base font-normal text-gray-600 underline hover:text-gray-800 dark:text-gray-50 dark:hover:text-white"
      >
        {{ $t('messages.general.edit') }}
      </NuxtLink>
    </div>

    <div
      v-for="item in cartItems"
      :key="item.uid"
      class="mt-7 flex flex-1 text-lg font-normal text-gray-800 dark:text-gray-50"
    >
      <CheckoutSummaryProductItem
        :product="item.product"
        :qty="item.quantity"
      />
    </div>
  </div>
</template>
