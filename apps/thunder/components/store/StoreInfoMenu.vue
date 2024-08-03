<script lang="ts" setup>
const { showMegaMenu } = useMegaMenu();
const localePath = useLocalePath();

const isOpen = useState('isStoreInfoOpen');

const items = [
  {
    label: "What's New ",
    link: localePath(getCategoryUrl('what-is-new'))
  },
  {
    label: 'Men',
    link: localePath(getCategoryUrl('men/tops-men'))
  },
  {
    label: 'Women',
    link: localePath(getCategoryUrl('women/tops-women'))
  },
  {
    label: 'Gear ',
    link: localePath(getCategoryUrl('gear'))
  }
];

function handleClick() {
  isOpen.value = false;
}
</script>

<template>
  <div class="flex flex-col justify-start gap-4">
    <a
      class="mb-4 hover:cursor-pointer"
      @click.prevent="showMegaMenu = !showMegaMenu"
    >
      <BaseTypography variant="heading">
        <span>{{ $t('messages.shop.catalog') }}</span>
        <span><Icon name="solar:alt-arrow-right-linear" class="ml-2" /></span>
      </BaseTypography>
    </a>

    <NuxtLink
      v-for="item in items"
      :key="item.label"
      class="hover:cursor-pointer"
      :to="item.link"
      @click="handleClick"
    >
      <BaseTypography variant="subtitle">
        <span>{{ item.label }}</span>
      </BaseTypography>
    </NuxtLink>
  </div>
</template>
