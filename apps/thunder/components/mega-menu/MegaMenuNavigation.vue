<script lang="ts" setup>
const localePath = useLocalePath();
const { data, updateMegaMenu } = useMegaMenu();

await updateMegaMenu();
</script>

<template>
  <div v-if="data" class="hidden lg:flex">
    <div class="flex items-center gap-3 text-white">
      <MegaMenuTrigger />
      <div
        v-for="category in data.children"
        :key="category?.uid"
        class="rounded-full px-4 py-2 text-lg transition duration-150 ease-out hover:cursor-pointer hover:bg-[#fff6]"
      >
        <NuxtLink :to="localePath(getCategoryUrl(category.urlPath ?? ''))">
          {{ category.name }}</NuxtLink
        >
      </div>
    </div>
    <MegaMenuList :mega-menu="data" />
  </div>
</template>
