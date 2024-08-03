<script setup lang="ts">
const { data } = useCategory();
</script>

<template>
  <div v-if="data" class="flex space-y-2">
    <BaseTypography variant="heading">
      <h1>{{ data.name ?? '' }}</h1>
    </BaseTypography>
    <div v-html="data.description ?? ''" />
  </div>
</template>
