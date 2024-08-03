<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink
    :to="localePath(paths.search)"
    class="relative flex"
    title="Search products"
  >
    <UButton color="black" variant="ghost" size="xl" :padded="false">
      <template #leading>
        <Icon name="solar:magnifer-linear" class="text-3xl" />
      </template>
    </UButton>
  </NuxtLink>
</template>
