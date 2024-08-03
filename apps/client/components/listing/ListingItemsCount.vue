<script lang="ts" setup>
defineProps<{
  count: number;
}>();
</script>

<template>
  <div class="relative text-sm">
    <ItemCounter :total-count="count ?? 0" />
  </div>
</template>
