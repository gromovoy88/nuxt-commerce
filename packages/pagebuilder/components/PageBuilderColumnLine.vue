<script lang="ts" setup>
import type { ColumnLineProps } from '../content-types/column-line/types';

defineProps<ColumnLineProps>();
</script>

<template>
  <div class="grid gap-4" :class="`grid-cols-${content.columns}`">
    <slot></slot>
  </div>
</template>
