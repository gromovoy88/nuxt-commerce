<script lang="ts" setup>
import type { SortField, SortFieldOption } from '@thunder/types';

const { sort } = defineProps<{
  sort: SortField;
}>();

const { sortValue, sortOrder } = useSorting();

const sortFields = computed(() => sort.options);

const defaultSortOption = sortFields.value.find(
  (option) => option?.value === sort.default
);
const sortOption: Ref<SortFieldOption> = ref({
  label: '',
  value: ''
});

if (defaultSortOption) {
  sortOption.value = defaultSortOption;
}

const emit = defineEmits(['update-product-list']);

function selectOption(option: SortFieldOption) {
  sortOption.value = option;
}

function toggleOrder() {
  if (sortOrder.value === 'ASC') {
    sortOrder.value = 'DESC';
    return;
  }
  if (sortOrder.value === 'DESC') {
    sortOrder.value = 'ASC';
  }
}

watch([sortOption, sortOrder], () => {
  if (sortOption.value?.value) {
    sortValue.value = sortOption.value.value;
    emit('update-product-list');
  }
});
</script>

<template>
  <div v-if="sort" class="flex items-center">
    <div class="mr-4 hover:cursor-pointer" @click="toggleOrder">
      <Icon
        v-if="sortOrder === 'DESC'"
        name="solar:sort-from-bottom-to-top-bold"
        class="text-2xl"
      />
      <Icon v-else name="solar:sort-from-top-to-bottom-bold" class="text-2xl" />
    </div>
    <ListingSortSelect
      v-if="sortFields"
      :model-value="sortValue"
      :sort-fields="sortFields"
      @select-option="selectOption"
    />
  </div>
</template>
