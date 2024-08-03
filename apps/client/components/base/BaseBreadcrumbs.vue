<script lang="ts" setup>
import type { Breadcrumb } from '@thunder/types';

defineProps<{
  items: Breadcrumb[];
  home?: string;
}>();

const localePath = useLocalePath();
</script>

<template>
  <div
    class="flex items-center gap-2 pt-4 text-sm font-normal text-gray-600 dark:text-gray-200"
  >
    <span class="flex items-center gap-2">
      <NuxtLink
        :to="localePath(home ?? '/')"
        class="hover:text-gray-800"
        title="Homepage"
      >
        <Icon name="solar:home-2-linear" :title="$t('messages.general.home')"
      /></NuxtLink>
      <span><Icon name="solar:alt-arrow-right-outline" /></span>
    </span>
    <template v-if="items?.length">
      <span
        v-for="(item, index) in items"
        :key="item.title"
        class="flex items-center gap-2"
      >
        <NuxtLink
          v-if="item.link"
          :to="localePath(item.link)"
          class="hover:text-gray-800"
          >{{ item.title }}</NuxtLink
        >
        <span v-else>{{ item.title }}</span>
        <span v-if="index < items.length - 1"
          ><Icon name="solar:alt-arrow-right-outline"
        /></span>
      </span>
    </template>
  </div>
</template>
