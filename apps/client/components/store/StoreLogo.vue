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
      class="mr-2 h-10 w-10 object-contain"
    />
    <BaseTypography class="hidden font-bold lg:block" variant="heading">
      {{ 'Sushi' }}
    </BaseTypography>
  </NuxtLink>
</template>
