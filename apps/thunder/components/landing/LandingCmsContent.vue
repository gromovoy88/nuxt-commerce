<script lang="ts" setup>
const { fetchCmsPage } = useCmsApi();
const { data: page } = await fetchCmsPage('home');
</script>

<template>
  <PageBuilder v-if="page" :content="page.content" />
</template>
