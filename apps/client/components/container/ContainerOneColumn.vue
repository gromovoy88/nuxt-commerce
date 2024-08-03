<script lang="ts" setup>
defineProps<{
  fullWidth?: boolean;
  noPadding?: boolean;
}>();
</script>
<template>
  <UContainer
    :ui="{
      constrained: fullWidth ? 'max-w-full' : 'max-w-7xl',
      padding: noPadding ? 'px-0 sm:px-0 lg:px-0' : 'px-4 sm:px-6 lg:px-8'
    }"
  >
    <slot />
  </UContainer>
</template>
