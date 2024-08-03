<script lang="ts" setup>
const isOpen = ref(false);
</script>

<template>
  <div class="relative rounded-lg bg-white p-4">
    <div
      class="flex justify-between hover:cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <span class="text-md font-bold capitalize">
        <slot name="label" />
      </span>
      <span class="ml-6 flex items-center">
        <Icon
          name="solar:alt-arrow-down-linear"
          class="transition-transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </span>
    </div>
    <div
      v-if="isOpen"
      ref="filtersWrapper"
      class="absolute left-0 top-16 z-50 flex max-h-[140px] w-[300px] flex-wrap gap-4 overflow-y-auto rounded-lg bg-white p-4 pb-4 shadow-lg"
    >
      <slot name="options" />
    </div>
  </div>
</template>
