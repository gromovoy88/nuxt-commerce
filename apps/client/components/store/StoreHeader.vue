<script lang="ts" setup>
const isStoreInfoOpen = useState<boolean>('isStoreInfoOpen');
</script>

<template>
  <header class="header">
    <ContainerOneColumn :full-width="true">
      <div class="relative py-4">
        <div class="flex gap-6">
          <UButton
            color="black"
            variant="ghost"
            size="xl"
            :padded="false"
            class="lg:hidden"
            @click="isStoreInfoOpen = true"
          >
            <template #leading>
              <Icon name="solar:hamburger-menu-linear" class="text-3xl" />
            </template>
          </UButton>
          <StoreLogo />
          <StoreNavigation class="hidden lg:flex" />
          <div class="ml-auto flex items-center justify-end">
            <div class="flex items-center space-x-4">
              <CustomerTrigger />
              <MinicartTrigger class="lg:hidden" />
              <StoreLanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </ContainerOneColumn>
    <LazyStoreInfoSidebar v-show="isStoreInfoOpen" />
  </header>
</template>
