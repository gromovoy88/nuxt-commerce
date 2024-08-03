<script lang="ts" setup>
const isStoreInfoOpen = useState<boolean>('isStoreInfoOpen');
const isMinicartOpen = useState<boolean>('isMinicartOpen');
const { showMegaMenu } = useMegaMenu();

function openMenu() {
  showMegaMenu.value = true;
}
</script>

<template>
  <header class="sticky top-0 z-50 mb-6 bg-gray-900 md:mb-8 dark:bg-slate-800">
    <UContainer>
      <div class="relative py-4">
        <div class="flex gap-6 text-white lg:mb-4">
          <UButton
            color="black"
            variant="ghost"
            size="xl"
            :padded="false"
            class="lg:hidden"
            @click="openMenu"
          >
            <template #leading>
              <Icon name="solar:hamburger-menu-linear" class="text-3xl" />
            </template>
          </UButton>
          <StoreLogo />
          <SearchBar class="hidden flex-1 lg:block" />
          <div class="ml-auto flex items-center justify-end">
            <div class="flex items-center space-x-4">
              <SearchTrigger />
              <CustomerTrigger />
              <MinicartTrigger />
            </div>
          </div>
        </div>
        <div class="flex">
          <MegaMenuNavigation />
        </div>
      </div>
    </UContainer>
    <div v-show="isStoreInfoOpen">
      <LazyStoreInfoSidebar />
    </div>
    <div v-show="isMinicartOpen">
      <LazyMinicartSidebar />
    </div>
  </header>
</template>
