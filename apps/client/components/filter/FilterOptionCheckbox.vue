<script lang="ts" setup>
import { getAggregationOptionLabel } from '../../utils/aggregations';

defineProps<{
  label: string;
  value: string;
  count: number;
  isOptionSelected: boolean;
}>();

defineEmits(['toggle-option']);
</script>

<template>
  <div
    class="flex rounded-md border text-xs"
    :class="[isOptionSelected ? 'text-blue-700' : 'text-gray-600']"
    @click="$emit('toggle-option', value)"
  >
    <UButton
      size="xs"
      :color="isOptionSelected ? 'primary' : 'gray'"
      :variant="isOptionSelected ? 'outline' : 'ghost'"
      :label="`${getAggregationOptionLabel(label)} (${count})`"
      :trailing="false"
    />
  </div>
</template>
