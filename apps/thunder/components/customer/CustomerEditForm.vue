<script lang="ts" setup>
const { showError } = useUiErrorHandler();
const { showSuccess } = useUiNotification();
const { t } = useI18n();
const { data: customer } = useCustomer();
const { changeCustomerData } = useCustomer();

const formData = reactive({
  firstName: customer.value?.firstName ?? '',
  lastName: customer.value?.lastName ?? ''
});

async function submitEditCustomer() {
  const { firstName, lastName } = formData;
  const data = await changeCustomerData({ firstName, lastName });

  if (!data) {
    showError('Can`t update customer data');
    return;
  }

  customer.value = data;
  showSuccess(t('messages.account.accountDataSuccess'));
}
</script>

<template>
  <div>
    <BaseTypography variant="subtitle" class="mb-6 lg:mb-8">
      <h2>{{ $t('messages.account.customerInformation') }}</h2>
    </BaseTypography>
    <form class="w-full" @submit.prevent="submitEditCustomer">
      <div class="mb-6">
        <UFormGroup name="firstName" :label="$t('messages.form.firstName')">
          <UInput
            v-model="formData.firstName"
            type="text"
            size="xl"
            :placeholder="$t('messages.form.firstName')"
            required
          />
        </UFormGroup>
      </div>
      <div class="mb-6">
        <UFormGroup name="lastName" :label="$t('messages.form.lastName')">
          <UInput
            v-model="formData.lastName"
            type="text"
            size="xl"
            :placeholder="$t('messages.form.lastName')"
            required
          />
        </UFormGroup>
      </div>
      <UButton
        class="mb-10"
        color="primary"
        size="xl"
        :label="$t('messages.form.submit')"
        type="submit"
        :loading="false"
      />
    </form>
  </div>
</template>
