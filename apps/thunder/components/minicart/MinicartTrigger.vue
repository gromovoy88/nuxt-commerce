<script setup lang="ts">
const { data: cart } = useCart();
const route = useRoute();
const isOpen = useState<boolean>('isMinicartOpen', () => false);

function toggleMinicart() {
  if (route.path === '/cart') {
    closeMinicart();
    return;
  }

  isOpen.value = !isOpen.value;
}

function closeMinicart() {
  isOpen.value = false;
}
</script>

<template>
  <UButton
    color="black"
    variant="ghost"
    size="xl"
    :padded="false"
    :title="$t('messages.cart.cartPage')"
    class="relative"
    @click="toggleMinicart"
  >
    <template #leading>
      <Icon name="solar:bag-3-linear" class="text-3xl" />
      <UBadge
        size="xs"
        class="absolute -right-1 -top-1 px-[4px] py-[1px]"
        :ui="{ rounded: 'rounded-full' }"
        >{{ cart?.totalQuantity ?? 0 }}</UBadge
      >
    </template>
  </UButton>
</template>
