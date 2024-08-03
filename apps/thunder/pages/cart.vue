<script lang="ts" setup>
const { t } = useI18n();
const { data: breadcrumbs, setBreadcrumbs } = useBreadcrumbs();
const { cartItems } = useCartItem();

setBreadcrumbs([{ title: t('messages.shop.cart'), link: '' }]);

useHead({
  title: 'Cart',
  titleTemplate: '%s - Thunder Commerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: '- Thunder Commerce'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>

<template>
  <ContainerOneColumn>
    <BaseBreadcrumbs class="mb-6" :items="breadcrumbs" />
    <div v-if="cartItems.length">
      <h1 class="mb-10 text-2xl font-bold">
        <span class="mr-2">{{ $t('messages.shop.cart') }}</span>
        <span>({{ cartItems.length }})</span>
      </h1>
      <div class="mx-auto justify-center md:flex md:space-x-6 xl:px-0">
        <div class="md:w-2/3">
          <CartItem v-for="item in cartItems" :key="item.uid" :item="item" />
        </div>
        <div class="mt-6 md:mt-0 md:w-1/3">
          <CartSummary />
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="m-4 text-center text-3xl">
        <span>{{ $t('messages.cart.empty') }}</span>
      </h2>
    </div>
  </ContainerOneColumn>
</template>
