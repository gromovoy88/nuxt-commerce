<script setup lang="ts">
const route = useRoute();
const { data: categoryData, updateCategory } = useCategory();
const { input } = useProductList();

const urlPath = [...route.params.slug].join('/');

await updateCategory(urlPath);

if (categoryData.value?.uid) {
  input.value = {
    filters: {
      category_uid: {
        eq: categoryData.value.uid
      }
    }
  };
} else {
  redirectOrNotFound(urlPath);
}

const { fetchProductList } = useProductList();

const { data, status } = await useAsyncData('product-list', () =>
  fetchProductList({})
);

async function updateProductList() {
  data.value = await fetchProductList();
}

useHead({
  title: computed(() => `${categoryData.value?.name ?? ''}`),
  titleTemplate: '%s - Thunder Commerce',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '- Thunder Commerce'
    }
  ]
});
</script>

<template>
  <div>
    <UContainer>
      <div class="mb-6">
        <ListingBreadcrumbs />
      </div>
      <div class="mb-6 md:mb-12">
        <ListingCategoryInfo />
      </div>
    </UContainer>
    <ListingView
      :data="data"
      :loading="status === 'pending'"
      @update-product-list="updateProductList"
    />
  </div>
</template>
