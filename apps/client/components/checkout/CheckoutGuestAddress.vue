<script lang="ts" setup>
const { data: cart } = useCart();

defineEmits<{ 'set-address': [] }>();

const isEmailAddress = computed(() => !!cart.value?.email);
</script>

<template>
  <div>
    <CheckoutGuestEmail :class="{ 'mb-6': isEmailAddress }" />
    <CheckoutBillingAddress
      v-if="isEmailAddress"
      @set-billing-address="$emit('set-address')"
    />
  </div>
</template>
