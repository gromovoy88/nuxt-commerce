<script setup lang="ts">
const { applyDiscountCoupon } = useCartApi();
const { setCart } = useCart();
const { getCartId } = useCartToken();

const couponCode = ref('');
const errorMessage = ref('');
const isOpen = ref(false);

async function applyCoupon() {
  if (!couponCode.value) {
    errorMessage.value = 'Please enter a valid coupon code.';
    return;
  }

  const { data, error } = await applyDiscountCoupon(
    getCartId(),
    couponCode.value
  );

  if (!data) {
    errorMessage.value = error?.message ?? 'Please enter a valid coupon code.';
    return;
  }

  setCart(data);
  couponCode.value = '';
  errorMessage.value = '';
}
</script>

<template>
  <div>
    <BaseTypography
      class="flex justify-between"
      variant="caption"
      @click="isOpen = !isOpen"
    >
      <span class="font-bold">{{ 'Discount Coupon' }}</span>
      <span class="ml-6 flex items-center">
        <Icon
          name="solar:alt-arrow-down-linear"
          class="transition-transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </span>
    </BaseTypography>
    <form v-if="isOpen" class="mt-4" @submit.prevent="applyCoupon">
      <UFormGroup
        description="Apply Discount Code."
        size="xl"
        :error="errorMessage"
        class="mb-4"
      >
        <UInput
          v-model="couponCode"
          type="text"
          size="md"
          :placeholder="'Enter coupon code'"
          required
        />
      </UFormGroup>
      <UButton
        color="primary"
        size="md"
        :label="'Apply Discount'"
        type="submit"
        variant="outline"
        :loading="false"
      />
    </form>
  </div>
</template>
