<script lang="ts" setup>
defineProps<{
  totalCount: number;
}>();
</script>

<template>
  <div class="relative text-sm">
    <span class="mr-2 font-bold">{{ totalCount }}</span>
    <span>{{
      totalCount === 1
        ? $t('messages.shop.product')
        : $t('messages.shop.products')
    }}</span>
  </div>
</template>
