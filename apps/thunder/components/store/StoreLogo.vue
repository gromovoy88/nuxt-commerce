<script setup lang="ts">
const localePath = useLocalePath();

const logoUrl = useRuntimeConfig().public.logo;
</script>

<template>
  <NuxtLink
    :to="localePath(paths.home)"
    class="flex items-center"
    tabindex="-1"
    title="Homepage"
  >
    <NuxtImg
      :src="logoUrl ?? ''"
      alt="Thunder Logo"
      class="mx-auto h-10 w-[110px] object-contain"
    />
  </NuxtLink>
</template>
