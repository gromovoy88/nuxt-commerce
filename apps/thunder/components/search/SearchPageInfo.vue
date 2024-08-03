<script lang="ts" setup>
defineProps<{
  isUpdating: boolean;
}>();

const { data: searchQuery, setSearch, isSearch } = useSearch();

function handleSearch() {
  setSearch(searchQuery.value);
}

function resetSearch() {
  if (!searchQuery.value) {
    return;
  }

  setSearch('');
}
</script>

<template>
  <div
    class="mb-4 rounded-lg bg-slate-200 py-6 text-center shadow-sm dark:bg-gray-800 md:py-8 lg:mb-8 lg:py-10"
  >
    <div>
      <BaseTypography variant="heading" class="mb-4 lg:mb-8">
        <h1>
          <span v-if="searchQuery">{{
            `${$t('messages.shop.search')}: ${searchQuery}`
          }}</span>
          <span v-else>{{ $t('messages.shop.allProducts') }}</span>
        </h1>
      </BaseTypography>

      <div class="flex justify-center p-4">
        <div class="relative flex w-full lg:w-2/3">
          <UInput
            v-model="searchQuery"
            name="search-input"
            icon="i-heroicons-magnifying-glass-20-solid"
            size="xl"
            color="white"
            :loading="isUpdating"
            :trailing="false"
            class="w-full"
            @blur="handleSearch"
          />
          <UButton
            v-if="isSearch"
            variant="ghost"
            color="gray"
            class="absolute right-1 top-1"
          >
            <template #trailing>
              <Icon
                name="ri:close-fill"
                class="text-2xl hover:cursor-pointer"
                @click="resetSearch"
              />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
