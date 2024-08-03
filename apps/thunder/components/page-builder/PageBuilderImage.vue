<script lang="ts" setup>
import type { ImageProps } from '@thunder/pagebuilder/content-types/image/types';

defineProps<ImageProps>();
</script>

<template>
  <div v-if="content">
    <NuxtImg :src="content.src" :alt="'Pagebuilder content'" class="w-full" />
  </div>
</template>
