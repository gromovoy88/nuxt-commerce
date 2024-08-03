<script lang="ts" setup>
import type { Component } from 'vue';
import type { ContentTypeConfig, ContentTypes } from '../types/content.types';

type PageBuilderFactoryProps = {
  data: ContentTypeConfig<string>;
};

const props = defineProps<PageBuilderFactoryProps>();

const contentType = props.data.contentType as ContentTypes;
const component = getComponentByType(contentType) as Component;
</script>

<template>
  <div>
    <component :is="component" v-bind="props.data">
      <div
        v-for="(elementChild, indexChild) in data.elements"
        :key="indexChild"
      >
        <PageBuilderRender v-if="elementChild" :data="elementChild" /></div
    ></component>
  </div>
</template>
