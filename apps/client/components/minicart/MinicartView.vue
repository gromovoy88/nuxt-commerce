<script lang="ts" setup>
const localePath = useLocalePath();
const { data: cart } = useCart();
const { cartItems } = useCartItem();

const emit = defineEmits(['close-minicart']);

function handleRedirect(url: string) {
  emit('close-minicart');
  navigateTo({
    path: localePath(url)
  });
}
</script>

<template>
  <div v-if="cart" class="flex h-full w-full flex-col px-4 lg:pt-[72px]">
    <div
      v-if="!cartItems.length"
      class="mt-auto flex items-center justify-center gap-4"
    >
      <NuxtImg
        :src="'/images/cart.svg'"
        alt="Empty cart image"
        class="h-14 w-14 object-contain"
      />
      <BaseTypography>
        {{ $t('messages.cart.empty') }} <br />
        {{ $t('messages.cart.emptyAddMore') }}
      </BaseTypography>
    </div>
    <div v-else class="mb-6 overflow-y-auto">
      <MinicartItem v-for="item in cartItems" :key="item.uid" :item="item" />
    </div>
    <div class="mt-auto flex flex-col">
      <div class="flex items-center justify-between">
        <BaseTypography>
          <span>{{ $t('messages.shop.total') }}</span>
          <ProductPrice :price="cart.prices.grandTotal" />
        </BaseTypography>
        <UButton
          color="primary"
          variant="outline"
          size="xl"
          :label="$t('messages.cart.checkout')"
          :disabled="cartItems.length === 0"
          @click="handleRedirect('/checkout')"
        />
      </div>
      <div class="mt-6 pb-6">
        <CartDiscountCoupon />
      </div>
    </div>
  </div>
</template>
