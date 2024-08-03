<script lang="ts" setup>
import type { Filter } from '@thunder/types';

const { filters } = defineProps<{
  filters: Filter[];
}>();

const route = useRoute();
const { getQueryFilters, resetQueryFilters, setQueryFilter } = useFiltering();
const { setPage } = usePagination();

const activeQueryFilters = ref(getQueryFilters());

const activeFilters = computed(
  () =>
    filters
      ?.filter((filter) =>
        activeQueryFilters.value.find(
          (queryFilter) => queryFilter.name === filter?.attributeCode
        )
      )
      ?.map((filter) => filter!) ?? []
);

const emit = defineEmits(['update-product-list']);

async function removeFilters() {
  await setPage(1);
  await resetQueryFilters();
  emit('update-product-list');
}

async function updateFilter(filter: QueryFilter) {
  await setPage(1);
  await setQueryFilter(filter);
  emit('update-product-list');
}

watch(
  route,
  () => {
    activeQueryFilters.value = getQueryFilters();
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div
    v-if="activeQueryFilters.length"
    class="mb-4 flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm dark:bg-transparent md:bg-white lg:flex-row lg:flex-wrap"
  >
    <div>
      <UButton
        label="Clear filters"
        variant="outline"
        color="primary"
        @click="removeFilters"
      >
        <template #trailing>
          <Icon name="solar:refresh-outline" />
        </template>
      </UButton>
    </div>

    <div v-for="filter in activeFilters" :key="filter.attributeCode">
      <ListingFiltersActiveOptions
        :filter-item="filter"
        @update-filter="updateFilter"
      />
    </div>
  </div>
</template>
