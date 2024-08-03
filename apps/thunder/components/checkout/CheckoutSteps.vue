<script lang="ts" setup>
defineProps<{ activeStep: number }>();
</script>

<template>
  <div>
    <div class="mb-8 flex items-center justify-center">
      <slot name="steps" />
    </div>
    <div class="flex flex-col gap-4">
      <CheckoutStepItem v-if="activeStep >= 1">
        <template #title>
          <h2>1. {{ $t('messages.checkout.billingDetails') }}</h2>
        </template>
        <template #content>
          <slot name="address" />
        </template>
      </CheckoutStepItem>
      <CheckoutStepItem v-if="activeStep >= 2">
        <template #title>
          <h2>2. {{ $t('messages.checkout.shippingSelect') }}</h2>
        </template>
        <template #content>
          <slot name="shipping" />
        </template>
      </CheckoutStepItem>
      <CheckoutStepItem v-if="activeStep >= 3">
        <template #title>
          <h2>3. {{ $t('messages.checkout.paymentOptions') }}</h2>
        </template>
        <template #content>
          <slot name="payment" />
        </template>
      </CheckoutStepItem>
    </div>
  </div>
</template>
