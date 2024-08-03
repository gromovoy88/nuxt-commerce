<script lang="ts" setup>
defineProps<{
  value: number;
  size: string;
}>();

function getRatingSummary(rating: number) {
  return Math.round((rating / 100) * 5);
}
</script>

<template>
  <div class="flex">
    <span v-for="i in 5" :key="i" :class="{ 'mr-1': i < 5 }">
      <Icon
        :size="size || '24px'"
        :color="[getRatingSummary(value) >= i ? 'yellow' : 'lightgrey']"
        name="solar:star-bold"
      />
    </span>
  </div>
</template>
