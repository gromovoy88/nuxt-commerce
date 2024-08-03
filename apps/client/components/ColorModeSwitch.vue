<script lang="ts" setup>
const modes = {
  dark: 'dark',
  light: 'light',
  system: 'system'
};
const colorMode = useColorMode();
const isDarkModeEnabled = computed(
  () => colorMode.value !== modes.light && colorMode.value !== modes.system
);

function setColorMode(mode: string) {
  colorMode.preference = mode;
  colorMode.value = mode;
}
</script>

<template>
  <div class="flex items-center">
    <span class="w-20 text-sm text-gray-500">{{
      $t('messages.general.mode')
    }}</span>
    <div class="flex flex-wrap gap-4">
      <UButton
        variant="ghost"
        color="black"
        :label="
          $t(`messages.general.${isDarkModeEnabled ? 'lightMode' : 'darkMode'}`)
        "
        @click.prevent="
          setColorMode(isDarkModeEnabled ? modes.light : modes.dark)
        "
      >
        <template #leading>
          <span class="mr-3 text-[24px] leading-none">
            <Icon
              :name="
                isDarkModeEnabled ? 'solar:sun-2-linear' : 'solar:moon-linear'
              "
              class="text-xl"
            />
          </span>
        </template>
      </UButton>
    </div>
  </div>
</template>
