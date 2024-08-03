<script lang="ts" setup>
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

const switchLocalePath = useSwitchLocalePath();
const { locale, locales } = useI18n();

const availableLocales = computed(() =>
  locales.value
    .filter((item) => item instanceof Object && !Array.isArray(item))
    .map((item) => item as LocaleObject)
);

const flags: Record<string, string> = {
  en: '🇺🇸'
};
</script>

<template>
  <div class="flex items-center">
    <span class="w-20 text-sm text-gray-500">{{
      $t('messages.general.language')
    }}</span>
    <div class="flex flex-wrap gap-4">
      <NuxtLink
        v-for="item in availableLocales"
        :key="item.code"
        :to="switchLocalePath(item.code)"
      >
        <UButton
          :variant="locale === item.code ? 'solid' : 'ghost'"
          color="black"
          :disabled="locale === item.code"
        >
          <template #leading>
            <span>{{ flags[item.code] }}</span>
            <span> {{ item.name }}</span>
          </template>
        </UButton>
      </NuxtLink>
    </div>
  </div>
</template>
