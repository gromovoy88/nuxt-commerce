<script lang="ts" setup>
const route = useRoute();
const isOpen = useState<boolean>('isMinicartOpen');

function closeMinicart() {
  isOpen.value = false;
}

watch(
  route,
  () => {
    closeMinicart();
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <aside class="h-full bg-gray-50 lg:fixed lg:right-0 lg:top-0 lg:w-[360px]">
    <div class="hidden h-full lg:block">
      <slot></slot>
    </div>

    <div class="lg:hidden">
      <USlideover v-model="isOpen">
        <slot></slot>
      </USlideover>
    </div>
  </aside>
</template>
