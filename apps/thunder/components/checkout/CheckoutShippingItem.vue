<script lang="ts" setup>
import type { AvailableShippingMethod } from '@thunder/types';

const { isActive, item } = defineProps<{
  isActive: boolean;
  item: AvailableShippingMethod;
}>();

defineEmits(['select-method']);
</script>

<template>
  <div
    class="mx-auto flex cursor-pointer items-center justify-between rounded-xl border px-8 py-4 dark:border-gray-700"
    :class="{ 'border border-blue-500': isActive }"
    @click="$emit('select-method', item)"
  >
    <div class="flex items-center">
      <Icon
        name="solar:check-circle-linear"
        :class="{ 'text-blue-600': isActive }"
        class="text-2xl"
      />

      <div class="mx-5 flex space-y-1">
        <BaseTypography variant="subtitle">
          <span>
            {{ item.carrierTitle }}
          </span>
        </BaseTypography>

        <div
          class="rounded-full bg-gray-100 px-2 text-xs text-blue-500 dark:bg-gray-700 sm:px-4 sm:py-1"
        >
          {{ item.methodTitle }}
        </div>
      </div>
    </div>

    <BaseTypography variant="subtitle">
      <ProductPrice :price="item.amount" class="font-bold" />
    </BaseTypography>
  </div>
</template>
