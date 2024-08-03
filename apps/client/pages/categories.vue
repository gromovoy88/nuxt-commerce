<script lang="ts" setup>
const { data: categories } = useMegaMenu();
const { setBreadcrumbs, data: breadcrumbs } = useBreadcrumbs();
const localePath = useLocalePath();

setBreadcrumbs([
  {
    title: 'Menu',
    link: localePath('/categories')
  }
]);

const links = computed(
  () =>
    categories?.value?.children?.map((category) => ({
      label: category.name,
      to: localePath(getCategoryUrl(category.urlPath)),
      img: `/images/menu/${category.urlPath}.png`
    })) ?? []
);
</script>

<template>
  <div>
    <ContainerOneColumn>
      <div class="mb-6">
        <BaseBreadcrumbs :items="breadcrumbs" />
      </div>
      <div class="mb-12">
        <BaseTypography variant="heading">
          <h1>
            {{ 'Menu' }}
          </h1>
        </BaseTypography>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
        >
          <div class="flex flex-col items-center">
            <NuxtImg
              :src="link.img"
              :alt="link.label"
              class="mx-auto h-20 w-20 object-contain"
            />
            <BaseTypography variant="subtitle">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ link.label }}
              </h5>
            </BaseTypography>
          </div>
        </NuxtLink>
      </div>
    </ContainerOneColumn>
  </div>
</template>
