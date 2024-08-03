<script setup lang="ts">
const { data: category } = useCategory();

const { setBreadcrumbs, data: breadcrumbs } = useBreadcrumbs();

function updateCategoryBreadcrumbs() {
  if (!category.value) return;

  const parentCategories =
    category.value.breadcrumbs.map((breadcrumb) => ({
      title: breadcrumb?.categoryName,
      link: getCategoryUrl(breadcrumb?.categoryUrlPath)
    })) ?? [];
  const currrentCategory = { title: category.value.name, link: '' };

  setBreadcrumbs([...parentCategories, currrentCategory]);
}

updateCategoryBreadcrumbs();

watch(category, () => {
  updateCategoryBreadcrumbs();
});
</script>

<template>
  <BaseBreadcrumbs :items="breadcrumbs" />
</template>
