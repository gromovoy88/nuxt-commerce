<script setup lang="ts">
const { fetchCmsPage } = useCmsApi();
const { fetchRoute } = useStoreApi();
const route = useRoute();
const pageId = ref<string | null>(null);
const url = [...route.params.slug].join('/');

const { data: routeData } = await fetchRoute(url);

if (!routeData) {
  redirectOrNotFound(url);
}

if (routeData?.type === 'Page') {
  pageId.value = routeData.id;
}

const { data: page } = await fetchCmsPage(pageId.value ?? '');

const isPageBuilder = computed(() => detectPageBuilder(page?.content));

useHead({
  title: computed(() => `${page?.title}`),
  titleTemplate: '%s - Thunder Commerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: computed(() => `${page?.metaDescription}`),
      name: computed(() => `${page?.metaTitle}`),
      content: '- Thunder Commerce'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>

<template>
  <ContainerOneColumn v-if="page?.content">
    <PageBuilder v-if="isPageBuilder" :content="page.content" />
    <div v-else>
      <div v-html="page.content"></div>
    </div>
  </ContainerOneColumn>
</template>
