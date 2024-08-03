<script lang="ts" setup>
const { data: cart } = useCart();
const { selectedShippingMethod } = useCheckout();
</script>

<template>
  <div
    v-if="cart"
    class="mx-auto rounded-lg bg-white p-6 text-gray-800 shadow-sm dark:text-gray-100 md:dark:bg-gray-700"
  >
    <CheckoutSummaryProducts class="mb-4 border-b border-slate-200" />
    <div>
      <CheckoutSummaryPriceItem
        :label="$t('messages.shop.subtotal')"
        :price="cart.prices.subtotal"
      />
      <div>
        <CheckoutSummaryPriceItem
          v-for="discount in cart.prices.discount"
          :key="discount.label"
          :label="discount.label"
          :price="discount.amount"
        />
      </div>
      <div v-if="selectedShippingMethod">
        <CheckoutSummaryPriceItemShipping
          :shipping-method="selectedShippingMethod"
        />
      </div>
      <CheckoutSummaryPriceItem
        :label="$t('messages.shop.total')"
        :price="cart.prices.grandTotal"
      />
    </div>
  </div>
</template>
