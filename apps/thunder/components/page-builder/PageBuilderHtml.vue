<script lang="ts" setup>
import type { HtmlProps } from '@thunder/pagebuilder/content-types/html/types';

defineProps<HtmlProps>();
</script>

<template>
  <div v-if="content">
    <BaseTypography>
      <div v-html="content"></div>
    </BaseTypography>
  </div>
</template>
