<script lang="ts" setup>
import type { ImageProps } from '../content-types/image/types';

defineProps<ImageProps>();
</script>

<template>
  <div v-if="content">
    <img :src="content.src" alt="image" />
  </div>
</template>
