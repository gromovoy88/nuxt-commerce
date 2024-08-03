<script setup lang="ts">
import type { PageInfo } from '@thunder/types';

defineProps<{
  pagination: PageInfo;
  totalCount: number;
}>();

const { setPage, getPage } = usePagination();
const { data: storeConfig } = useStoreConfig();

const page = ref(getPage());

const emit = defineEmits(['update-product-list']);

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

watch(page, async () => {
  await setPage(page.value);
  scrollTop();
  emit('update-product-list');
});
</script>

<template>
  <div v-if="totalCount" class="col-span-full mx-auto flex justify-center">
    <UPagination
      v-model="page"
      :max="5"
      :total="totalCount"
      :page-count="storeConfig?.gridPerPage || 10"
      size="lg"
    />
  </div>
</template>
