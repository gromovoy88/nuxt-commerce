<script setup lang="ts">
const route = useRoute();
const { data, updateCategory } = useCategory();
const { updateProductList } = useProductList();
const { input } = useProductList();

const urlPath = [...route.params.slug].join('/');

await updateCategory(urlPath);

if (data.value?.uid) {
  input.value = {
    filters: {
      category_uid: {
        eq: data.value.uid
      }
    }
  };
} else {
  redirectOrNotFound(urlPath);
}

await updateProductList();

useHead({
  title: computed(() => `${data.value?.name ?? ''}`),
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
    <ListingView />
  </div>
</template>
