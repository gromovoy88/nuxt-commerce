<script setup lang="ts">
const route = useRoute();
const { fetchPage } = usePage();
const { fetchRoute } = useStoreRoute();

const pageId = ref<string | null>(null);
const url = [...route.params.slug].join('/');

const { data: routeData } = await useAsyncData('store-route', () =>
  fetchRoute(url)
);

if (!routeData.value) {
  redirectOrNotFound(url);
}

if (routeData.value?.type === 'Page') {
  pageId.value = routeData.value.id;
}

const { data: pageData } = await useAsyncData('store-route', () =>
  fetchPage(pageId.value ?? '123')
);

useHead({
  title: computed(() => `${pageData.value?.title}`),
  titleTemplate: '%s - Thunder Commerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: computed(() => `${pageData.value?.metaDescription}`),
      name: computed(() => `${pageData.value?.metaTitle}`),
      content: '- Thunder Commerce'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>

<template>
  <ContainerOneColumn v-if="pageData?.content">
    <div v-html="pageData.content"></div>
  </ContainerOneColumn>
</template>
