<script lang="ts" setup>
defineProps<{
  listView?: boolean;
}>();

const localePath = useLocalePath();
const menuData = [
  {
    id: 0,
    label: 'Homepage',
    urlKey: localePath('/')
  },
  {
    id: 1,
    label: 'Menu',
    urlKey: localePath('/categories')
  },
  {
    id: 2,
    label: 'Delivery',
    urlKey: localePath('/content/delivery')
  },
  {
    id: 3,
    label: 'Clients',
    urlKey: localePath('/content/clients')
  },
  {
    id: 4,
    label: 'News',
    urlKey: localePath('/content/news')
  }
];
</script>

<template>
  <div class="flex gap-3" :class="{ 'flex-col items-start': listView }">
    <div
      v-for="menuItem in menuData"
      :key="menuItem.id"
      class="rounded-full text-lg transition duration-150 ease-out hover:cursor-pointer hover:bg-[#fff6]"
      :class="{ 'px-0 py-4': listView, 'px-4 py-2': !listView }"
    >
      <NuxtLink :to="menuItem.urlKey">
        <UiLinkAction>
          {{ menuItem.label }}
        </UiLinkAction>
      </NuxtLink>
    </div>
  </div>
</template>
