<template>
  <div class="layout-default">
    <StoreHeader />
    <main class="main">
      <slot />
    </main>
    <StoreFooter />
    <UNotifications />
    <NuxtLoadingIndicator color="#348feb" :height="5" />
  </div>
</template>
