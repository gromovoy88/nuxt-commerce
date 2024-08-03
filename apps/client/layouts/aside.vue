<template>
  <div class="layout-aside-full relative">
    <div class="fixed top-0 z-50 w-full border-b bg-gray-50">
      <StoreHeader />
    </div>
    <div class="lg:pl-[110px] lg:pr-[360px] lg:pt-[72px]">
      <main class="main">
        <slot />
      </main>
      <StoreFooter />
    </div>
    <AsideCategoriesContainer>
      <AsideCategories />
    </AsideCategoriesContainer>
    <MinicartContainer>
      <MinicartView />
    </MinicartContainer>
    <UNotifications />
    <NuxtLoadingIndicator color="#348feb" :height="5" />
  </div>
</template>
