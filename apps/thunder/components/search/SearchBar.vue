<script lang="ts" setup>
const localePath = useLocalePath();

const search = ref('');

function directToSearch() {
  if (!search.value) {
    return;
  }

  navigateTo({
    path: localePath(paths.search),
    query: {
      query: search.value
    }
  });
  search.value = '';
}
</script>

<template>
  <div>
    <form class="relative flex w-full" @submit.prevent="directToSearch">
      <UInput
        v-model="search"
        name="header-search"
        :placeholder="$t('messages.shop.searchProducts')"
        class="search-input flex-auto"
        size="lg"
        @blur="directToSearch"
      >
        <template #leading>
          <Icon class="text-gray-700" name="solar:magnifer-linear" />
        </template>
      </UInput>
      <button
        type="submit"
        class="absolute right-1 top-1 flex-none rounded-full bg-black px-3 py-1.5 text-sm text-white"
      >
        <span>{{ $t('messages.shop.search') }}</span>
      </button>
    </form>
  </div>
</template>

<style lang="postcss">
.search-input {
  input {
    @apply rounded-full;
  }
}
</style>
