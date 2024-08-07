<script lang="ts" setup>
const { data: storeConfig, fetchStoresConfig } = useStoreConfig();
const { setStoreId } = useStoreToken();

const { data } = await useAsyncData('stores', () => fetchStoresConfig());

function getCurrencySymbol(locale: string, currency: string) {
  return (0)
    .toLocaleString(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    .replace(/\d/g, '')
    .trim();
}

function changeCurrency(code: string) {
  if (!code) {
    return;
  }

  setStoreId(code);
  window.location.reload();
}

function storeLocaleToIso(storeLocale: string) {
  return storeLocale.replace('_', '-');
}
</script>

<template>
  <div v-if="storeConfig && data?.length" class="flex items-center">
    <span class="w-20 text-sm text-gray-500">{{
      $t('messages.general.currency')
    }}</span>
    <div class="flex flex-wrap gap-4">
      <UButton
        v-for="store in data"
        :key="store.storeCode ?? ''"
        :disabled="store.storeCode === storeConfig.storeCode"
        :variant="store.storeCode === storeConfig.storeCode ? 'solid' : 'ghost'"
        color="black"
        @click="changeCurrency(store.storeCode ?? '')"
      >
        <template #leading>
          <span>{{ store.defaultDisplayCurrencyCode }}</span>
          <span>{{
            getCurrencySymbol(
              storeLocaleToIso(store.locale ?? ''),
              store.defaultDisplayCurrencyCode || ''
            )
          }}</span>
        </template>
      </UButton>
    </div>
  </div>
</template>
