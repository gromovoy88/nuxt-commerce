<template>
  <div class="layout-checkout">
    <CheckoutHeader>
      <template #logo>
        <StoreLogo />
      </template>
    </CheckoutHeader>
    <main class="main">
      <slot />
    </main>
    <StoreFooter />
    <UNotifications />
    <NuxtLoadingIndicator color="#348feb" :height="5" />
  </div>
</template>
