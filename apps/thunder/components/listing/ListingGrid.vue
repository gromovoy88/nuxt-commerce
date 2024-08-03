<script setup lang="ts">
const { count } = defineProps<{
  count: number;
}>();
</script>

<template>
  <div class="relative w-full">
    <div v-if="count" class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <slot></slot>
    </div>
    <div v-else>
      {{ $t('messages.shop.noResults') }}
    </div>
  </div>
</template>
