<script lang="ts" setup>
const { showMegaMenu } = useMegaMenu();

function toggleMenu() {
  showMegaMenu.value = !showMegaMenu.value;
}
</script>

<template>
  <div class="flex items-center">
    <button
      class="flex items-center rounded-full border border-white px-6 py-1 transition duration-150 ease-out hover:bg-[#fff6] hover:ease-in"
      @click.stop="toggleMenu"
    >
      <span class="mr-3 text-2xl leading-none">
        <Icon name="solar:hamburger-menu-linear" />
      </span>
      <span class="text-lg text-white">{{ $t('messages.shop.catalog') }}</span>
    </button>
  </div>
</template>
