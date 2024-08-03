<script lang="ts" setup>
import type { Filter } from '@thunder/types';

const { filter } = defineProps<{
  filter: Filter;
}>();

const { getQueryFilterValue } = useFiltering();

const selectedOptions: Ref<string[]> = ref(
  getQueryFilterValue(filter.attributeCode || '')
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
    name: filter.attributeCode,
    value: selectedOptions.value
  });
}

const emits = defineEmits(['update-filters']);

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
      <div class="flex flex-wrap gap-4">
        <div
          v-for="(option, index) in filter.options"
          :key="index"
          class="flex items-center"
        >
          <UButton
            color="gray"
            variant="ghost"
            :padded="false"
            class="rounded-full"
            @click="toggleOption(option?.value || '')"
          >
            <template #leading>
              <div
                class="flex h-8 w-8 items-center justify-center rounded-full border"
                :class="{
                  'border-primary': isOptionSelected(option?.value || '')
                }"
                :style="{ backgroundColor: option?.label?.toLocaleLowerCase() }"
              >
                <Icon
                  v-if="isOptionSelected(option?.value || '')"
                  name="material-symbols:check-small-rounded"
                  class="text-2xl text-white"
                />
              </div>
            </template>
          </UButton>
        </div>
      </div>
    </template>
  </FilterItemContainer>
</template>
