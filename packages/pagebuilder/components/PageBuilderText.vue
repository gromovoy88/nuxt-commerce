<script lang="ts" setup>
import type { TextProps } from '../content-types/text/types';

defineProps<TextProps>();
</script>

<template>
  <div>
    <p>{{ content }}</p>
  </div>
</template>
