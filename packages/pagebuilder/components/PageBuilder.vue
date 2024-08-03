<script lang="ts" setup>
type PageBuilderProps = {
  content: string;
};

const props = defineProps<PageBuilderProps>();

const data = parseStorageHtml(props.content);
</script>

<template>
  <div v-for="(element, index) in data.elements" :key="index">
    <PageBuilderRender v-if="element" :data="element" />
  </div>
</template>
