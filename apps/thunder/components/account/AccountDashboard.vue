<script lang="ts" setup>
const { data: customer } = useCustomer();
const localePath = useLocalePath();
</script>

<template>
  <div v-if="customer">
    <BaseCard class="min-h-[500px] lg:p-12">
      <BaseTypography variant="heading" class="mb-6">
        <h1>
          {{ $t('messages.account.customerInformation') }}
        </h1>
      </BaseTypography>

      <div class="mt-2">
        <BaseTypography>
          <p class="flex gap-4">
            <strong>{{ $t('messages.form.firstName') }}:</strong>
            {{ customer.firstName }}
          </p>
          <p class="flex gap-4">
            <strong>{{ $t('messages.form.lastName') }}:</strong>
            {{ customer.lastName }}
          </p>
          <p class="flex gap-4">
            <strong>{{ $t('messages.form.email') }}:</strong
            >{{ customer.email }}
          </p>
        </BaseTypography>
      </div>
      <div class="mt-4">
        <NuxtLink :to="localePath(paths.accountEdit)">
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
    </BaseCard>
  </div>
</template>
