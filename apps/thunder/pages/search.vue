<script lang="ts" setup>
const { t } = useI18n();
const { resetQueryFilters } = useFiltering();
const { data: searchQuery, getSearch } = useSearch();
const { setPage } = usePagination();
const { resetCategory } = useCategory();
const { setBreadcrumbs, data: breadcrumbs } = useBreadcrumbs();

const { fetchProductList, resetProductListInput } = useProductList();

searchQuery.value = getSearch() ?? '';

function updateSearchBreadcrumbs() {
  setBreadcrumbs([
    {
      title:
        (searchQuery.value &&
          `${t('messages.shop.search')}: ${searchQuery.value}`) ||
        t('messages.shop.search'),
      link: ''
    }
  ]);
}

resetCategory();
resetProductListInput();
updateSearchBreadcrumbs();

const { data, status } = await useAsyncData('search-product-list', () =>
  fetchProductList()
);

async function updateProductList() {
  data.value = await fetchProductList({});
}

async function searchProducts() {
  await resetQueryFilters();
  await setPage(1);
  await updateProductList();
  updateSearchBreadcrumbs();
}

watch(searchQuery, async () => {
  await searchProducts();
});

useHead({
  title: computed(() =>
    searchQuery.value ? `Search: ${searchQuery.value}` : 'All search'
  ),
  titleTemplate: '%s - Thunder Commerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'title',
      content: `Search: ${getSearch()}` || 'Search'
    },
    {
      name: 'robots',
      content: 'NOINDEX'
    }
  ]
});
</script>

<template>
  <div>
    <UContainer>
      <div class="mb-6">
        <BaseBreadcrumbs :items="breadcrumbs" />
      </div>
      <div class="mb-6 md:mb-12">
        <SearchPageInfo :is-updating="status === 'pending'" />
      </div>
    </UContainer>
    <ListingView :data="data" :loading="status === 'pending'" />
  </div>
</template>
