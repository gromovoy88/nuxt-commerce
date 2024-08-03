<script lang="ts" setup>
import type { SortFieldOption } from '@thunder/types';

const { sortFields, modelValue } = defineProps<{
  modelValue: string;
  sortFields: SortFieldOption[];
}>();

const sortOptions = computed(() => sortFields?.map((option) => option!) || []);

const selected = ref(modelValue || '');

const emit = defineEmits(['select-option']);

watch(selected, (value) => {
  emit(
    'select-option',
    sortOptions.value.find((option) => option?.value === value)
  );
});
</script>

<template>
  <div class="flex">
    <div class="mr-2 hidden w-20 items-center text-sm sm:flex">
      <span>{{ $t('messages.shop.sortBy') }}:</span>
    </div>
    <label class="hidden" for="product-variant">{{ 'Sort by' }}</label>
    <select
      id="product-variants"
      v-model="selected"
      name="product-variants"
      class="block w-full border-b border-gray-400 bg-transparent py-1 text-xs outline-none"
    >
      <option
        v-for="option in sortOptions"
        :key="option.value ?? ''"
        class="mb-2 hover:cursor-pointer"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
