<script lang="ts" setup>
import type { Filter } from '@thunder/types';

const { filter } = defineProps<{
  filter: Filter;
}>();

const emits = defineEmits(['update-filters']);

const { getQueryFilterValue } = useFiltering();

const range = computed(() =>
  getPriceRange(filter.options?.map((option) => option?.value || '') || [])
);
const currentRange = ref({ ...range.value });
const selectedOptions = ref(getQueryFilterValue(filter.attributeCode || ''));

function isOptionSelected(value: string): boolean {
  return !!selectedOptions.value.find((itemCode) => itemCode === value);
}

function toggleOption(optionValue: string): void {
  if (!optionValue) {
    return;
  }

  if (isOptionSelected(optionValue)) {
    selectedOptions.value = [];
    return;
  }

  selectedOptions.value = [optionValue];
  currentRange.value = getPriceRange(selectedOptions.value);
}

function applyRangeFilter() {
  toggleOption(`${currentRange.value.min}_${currentRange.value.max}`);
}

watch(range, () => {
  currentRange.value = { ...range.value };
});

watch(
  selectedOptions,
  () => {
    emits('update-filters', {
      name: filter.attributeCode,
      value: selectedOptions.value
    });
  },
  { deep: true }
);
</script>

<template>
  <FilterItemContainer v-if="filter">
    <template #label>
      <span>{{ filter.label }}</span>
    </template>
    <template #options>
      <div class="flex w-full items-center gap-4">
        <UFormGroup
          :label="$t('messages.shop.from')"
          class="flex-1"
          @blur="applyRangeFilter"
        >
          <UInput
            v-model="currentRange.min"
            size="md"
            :min="0"
            :max="currentRange.max"
            type="number"
            color="gray"
            variant="outline"
            :placeholder="$t('messages.shop.from')"
          />
        </UFormGroup>
        <span class="relative top-2">-</span>
        <UFormGroup
          :label="$t('messages.shop.to')"
          class="flex-1"
          @blur="applyRangeFilter"
        >
          <UInput
            v-model="currentRange.max"
            size="md"
            type="number"
            :min="0"
            :max="range.max"
            color="gray"
            variant="outline"
            :placeholder="$t('messages.shop.to')"
            class="flex-1"
        /></UFormGroup>
      </div>
      <div
        v-for="(option, index) in filter.options"
        :key="index"
        class="flex flex-col"
      >
        <FilterOptionCheckbox
          v-if="option?.label && option?.value && option?.count"
          :label="option.label"
          :count="option.count"
          :value="option.value"
          :is-option-selected="isOptionSelected(option.value)"
          @toggle-option="toggleOption"
        />
      </div>
    </template>
  </FilterItemContainer>
</template>
