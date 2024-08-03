<script lang="ts" setup>
const showEditPassword = ref(false);
</script>

<template>
  <div>
    <BaseCard class="min-h-[500px] lg:p-12">
      <BaseTypography variant="heading" class="mb-6">
        <h1>
          {{ $t('messages.account.profile') }}
        </h1>
      </BaseTypography>

      <div class="max-w-[500px]">
        <CustomerEditForm />
        <UCheckbox
          v-model="showEditPassword"
          :label="$t('messages.account.changePassword')"
          class="mb-10"
        />
        <CustomerEditPasswordForm v-if="showEditPassword" />
      </div>
    </BaseCard>
  </div>
</template>
