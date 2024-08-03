<script lang="ts" setup>
import type { HtmlProps } from '@thunder/pagebuilder/content-types/html/types';

defineProps<HtmlProps>();
</script>

<template>
  <div v-if="content">
    <div v-html="content"></div>
  </div>
</template>
