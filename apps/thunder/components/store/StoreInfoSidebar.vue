<script lang="ts" setup>
const route = useRoute();
const { showMegaMenu } = useMegaMenu();
const isOpen = useState<boolean>('isStoreInfoOpen');

watch(
  route,
  () => {
    isOpen.value = false;
  },
  { deep: true, immediate: true }
);

watch(showMegaMenu, () => {
  isOpen.value = false;
});
</script>

<template>
  <USlideover v-model="isOpen" side="left">
    <div class="bg-gray-900 p-6 text-white">
      <div class="mb-6 flex items-center justify-between">
        <StoreLogo />
        <Icon
          name="ri:close-fill"
          class="text-2xl hover:cursor-pointer"
          @click="isOpen = false"
        />
      </div>
      <div>
        <LazyCustomerWelcomeBlock />
      </div>
    </div>
    <div class="h-full overflow-y-auto px-12">
      <div class="py-10">
        <LazyStoreInfoMenu />
      </div>
      <div class="py-4">
        <LazyStoreLanguageSwitch />
      </div>
      <div class="py-4">
        <LazyStoreSwitch />
      </div>
      <div class="py-4">
        <LazyColorModeSwitch />
      </div>
    </div>
  </USlideover>
</template>
