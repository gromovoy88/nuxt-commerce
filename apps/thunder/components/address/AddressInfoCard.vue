<script lang="ts" setup>
import type { CustomerAddress } from '@thunder/types';

const { address } = defineProps<{
  address: CustomerAddress;
}>();

const localePath = useLocalePath();
</script>

<template>
  <div class="address-card">
    <div class="rounded-lg border border-slate-200 p-6 hover:shadow-lg">
      <BaseTypography variant="subtitle">
        {{ address.firstName }} {{ address.lastName }}
      </BaseTypography>
      <BaseTypography class="flex flex-col gap-2">
        <p>
          <span v-for="(line, index) in address.street" :key="index">
            {{ line }}
          </span>
        </p>
        <p>
          {{ address.city }}, {{ address.region }}
          {{ address.postcode }}
        </p>
        <p>{{ address.country }}</p>
      </BaseTypography>
      <BaseTypography
        v-if="address.defaultBilling || address.defaultShipping"
        variant="caption"
        class="mt-2 border-t"
      >
        <div v-if="address.defaultBilling" class="mt-2">
          <Icon name="solar:check-square-linear" class="mr-2" />{{
            $t('messages.account.defaultBilling')
          }}
        </div>
        <div v-if="address.defaultShipping" class="mt-2">
          <Icon name="solar:check-square-linear" class="mr-2" />
          {{ $t('messages.account.defaultShipping') }}
        </div>
      </BaseTypography>
      <div class="mt-4">
        <NuxtLink :to="localePath(`${paths.accountAddressEdit}/${address.id}`)">
          <UButton
            :padded="false"
            color="primary"
            size="xl"
            variant="link"
            :label="$t('messages.general.edit')"
            type="submit"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
