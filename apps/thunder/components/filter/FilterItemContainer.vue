<script lang="ts" setup>
const isOpen = ref(true);
const showMore = ref(false);
const showMoreActive = ref(false);
const filtersWrapper = ref<HTMLDivElement | null>(null);

function toggleMore() {
  showMore.value = !showMore.value;
}

function setShowMoreToggle() {
  const elementHeight = filtersWrapper.value?.offsetHeight || 0;

  showMoreActive.value = elementHeight >= 140;
}

onMounted(() => {
  setShowMoreToggle();
});
</script>

<template>
  <div class="relative">
    <div
      class="flex justify-between hover:cursor-pointer"
      @click="isOpen = !isOpen"
    >
      <span class="text-md font-bold capitalize">
        <slot name="label" />
      </span>
      <span class="ml-6 flex items-center">
        <Icon
          name="solar:alt-arrow-down-linear"
          class="transition-transform"
          :class="{ 'rotate-180': isOpen }"
        />
      </span>
    </div>
    <div
      v-if="isOpen"
      ref="filtersWrapper"
      class="relative mt-6 flex max-h-[140px] flex-wrap gap-4 overflow-y-hidden pb-4"
      :class="{
        'background-overlay': !showMore && showMoreActive,
        'max-h-max pb-8': showMore
      }"
    >
      <slot name="options" />
    </div>
    <UButton
      v-if="showMoreActive && isOpen"
      variant="link"
      class="absolute bottom-2 left-0 z-10"
      :label="
        showMore ? $t('messages.shop.showLess') : $t('messages.shop.showMore')
      "
      @click.prevent="toggleMore"
    />
    <hr class="my-4 w-full bg-gray-200" />
  </div>
</template>

<style lang="postcss" scoped>
.background-overlay {
  &:after {
    position: absolute;
    bottom: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 50px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 30%,
      rgba(255, 255, 255, 0) 100%
    );
    content: '';
  }
}
</style>
