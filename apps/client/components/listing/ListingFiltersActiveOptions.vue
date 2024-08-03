<script lang="ts" setup>
import type { Filter } from '@thunder/types';

const { filterItem } = defineProps<{
  filterItem: Filter;
}>();

const { getQueryFilterValue } = useFiltering();

const emit = defineEmits<{ 'update-filter': [filter: QueryFilter] }>();

function removeFilterValue(name: string, value: string) {
  const currentFilter = getQueryFilterValue(name);

  emit('update-filter', {
    name,
    value: currentFilter.filter(
      (currentFilterValue) => currentFilterValue !== value
    )
  });
}
</script>

<template>
  <div v-if="filterItem" class="flex flex-wrap items-center gap-4">
    <span class="text-sm">{{ filterItem.label }}:</span>
    <UButton
      v-for="option in getQueryFilterValue(filterItem.attributeCode)"
      :key="option"
      :label="
        getAggregationOptionLabel(
          filterItem?.options?.find((item) => option === item?.value)?.label ||
            option
        )
      "
      variant="outline"
      color="gray"
      @click="removeFilterValue(filterItem.attributeCode, option)"
    >
      <template #trailing>
        <Icon name="ri:close-fill" />
      </template>
    </UButton>
  </div>
</template>
