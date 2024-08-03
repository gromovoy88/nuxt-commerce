<script lang="ts" setup>
import type { Filter } from '@thunder/types';

const { filter } = defineProps<{
  filter: Filter;
}>();

const emits = defineEmits(['update-filters']);

const { getQueryFilterValue } = useFiltering();

const selectedOptions: Ref<string[]> = ref(
  getQueryFilterValue(filter?.attributeCode || '')
);

function isOptionSelected(value: string): boolean {
  return !!selectedOptions.value.find((itemCode) => itemCode === value);
}

function toggleOption(optionValue: string): void {
  if (!optionValue) {
    return;
  }

  if (isOptionSelected(optionValue)) {
    selectedOptions.value = [
      ...selectedOptions.value.filter(
        (selectedOptionValue) => optionValue !== selectedOptionValue
      )
    ];
  } else {
    selectedOptions.value.push(optionValue);
  }

  emits('update-filters', {
    name: filter?.attributeCode,
    value: selectedOptions.value
  });
}
</script>

<template>
  <FilterItemContainer>
    <template #label>
      <span>{{ filter.label }}</span>
    </template>
    <template #options>
      <div
        v-for="(option, index) in filter.options"
        :key="index"
        class="flex items-center"
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
