<script lang="ts" setup>
const localePath = useLocalePath();
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
  <div class="minicart p-6">
    <div v-if="cartItems.length === 0" class="py-4 text-center text-gray-500">
      <div class="mb-6 flex items-center justify-end lg:hidden">
        <Icon
          name="ri:close-fill"
          class="text-2xl hover:cursor-pointer"
          @click="$emit('close-minicart')"
        />
      </div>
      <BaseTypography variant="subtitle">
        <span>{{ $t('messages.cart.empty') }}</span>
      </BaseTypography>
    </div>
    <div v-else class="flex h-full flex-col">
      <div class="mb-6 flex items-center justify-between">
        <BaseTypography variant="subtitle" class="flex items-center">
          <h2>
            <span class="mr-2">{{ $t('messages.shop.cart') }}</span>
            <span>({{ cartItems.length }})</span>
          </h2>
        </BaseTypography>
        <Icon
          name="ri:close-fill"
          class="text-2xl hover:cursor-pointer"
          @click="$emit('close-minicart')"
        />
      </div>
      <MinicartItem v-for="item in cartItems" :key="item.uid" :item="item" />
      <div class="my-4 flex items-center justify-between">
        <UButton
          color="primary"
          size="xl"
          variant="ghost"
          :label="$t('messages.cart.viewCart')"
          @click="handleRedirect('/cart')"
        />
        <UButton
          color="primary"
          size="xl"
          variant="solid"
          :label="$t('messages.cart.checkout')"
          @click="handleRedirect('/checkout')"
        />
      </div>
      <CartDiscountCoupon class="mt-6 pb-6" />
    </div>
  </div>
</template>
