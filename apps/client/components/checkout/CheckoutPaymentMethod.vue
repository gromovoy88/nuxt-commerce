<script lang="ts" setup>
defineProps<{
  isActive: boolean;
  methodCode: string;
  methodTitle: string;
}>();

defineEmits(['select-method']);
</script>

<template>
  <div
    class="mx-auto flex cursor-pointer items-center justify-between rounded-xl border px-8 py-4 dark:border-gray-700"
    :class="{ 'border border-blue-500': isActive }"
    @click="$emit('select-method', methodCode)"
  >
    <div class="flex items-center">
      <Icon
        name="solar:check-circle-linear"
        :class="{ 'text-blue-600': isActive }"
        class="text-2xl"
      />

      <div class="mx-5 flex flex-col items-center space-y-1">
        <h2
          class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200"
        >
          {{ methodTitle }}
        </h2>
      </div>
    </div>
  </div>
</template>
