<script lang="ts" setup>
const localePath = useLocalePath();

const { data } = useMegaMenu();

const links = computed(
  () =>
    data?.value?.children?.map((category) => ({
      label: category.name,
      to: localePath(getCategoryUrl(category.urlPath)),
      img: `/images/categories/${category.urlPath}.svg`
    })) ?? []
);
</script>

<template>
  <div v-if="links.length" class="lg:pt-[72px]">
    <div class="flex gap-4 py-2 lg:hidden">
      <NuxtLink
        v-for="link in links"
        :key="link.label"
        :to="link.to"
        class="relative z-10 mx-auto flex flex-col items-center justify-center px-1 py-2 lg:flex-col"
      >
        <NuxtImg
          :src="link.img"
          :alt="link.label"
          class="mx-auto h-5 w-5 object-contain"
        />
      </NuxtLink>
    </div>
    <div class="hidden justify-center lg:flex">
      <UVerticalNavigation :links="links" class="hidden flex-row py-12 lg:flex">
        <template #default="{ link }">
          <div
            class="relative z-10 mx-auto flex items-center justify-center lg:flex-col"
          >
            <NuxtImg
              :src="link.img"
              :alt="link.label"
              class="mx-auto h-10 w-10 object-contain"
            />
            <span class="group-hover:text-primary relative">{{
              link.label
            }}</span>
          </div>
        </template>
      </UVerticalNavigation>
    </div>
  </div>
</template>
