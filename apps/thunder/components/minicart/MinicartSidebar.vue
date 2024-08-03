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
  <USlideover v-model="isOpen" side="right">
    <LazyMinicartView
      class="h-full overflow-y-auto"
      @close-minicart="closeMinicart"
    />
  </USlideover>
</template>
