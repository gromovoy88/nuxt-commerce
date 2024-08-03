<script lang="ts" setup>
const { showError } = useUiErrorHandler();
const { showSuccess } = useUiNotification();
const { t } = useI18n();
const { setCustomer } = useCustomer();
const { changeCustomerPassword } = useCustomerApi();

const formData = reactive({
  currentPassword: '',
  newPasswordConfirm: '',
  newPassword: ''
});
const validate = ref(false);
const showPassword = ref(false);

async function submitPasswordChange() {
  const { currentPassword, newPassword, newPasswordConfirm } = formData;

  validate.value = true;

  if (newPassword !== newPasswordConfirm) {
    showError(t('messages.account.passwordsNotMatch'));
  }

  const { data, error } = await changeCustomerPassword(
    currentPassword,
    newPassword
  );

  if (!data) {
    showError(error?.message);
    return;
  }

  setCustomer(data);
  showSuccess(t('messages.account.changePasswordSuccess'));
}
</script>

<template>
  <div>
    <BaseTypography variant="subtitle" class="mb-6 lg:mb-8">
      <h2>{{ $t('messages.account.changePassword') }}</h2>
    </BaseTypography>
    <form @submit.prevent="submitPasswordChange">
      <div>
        <div class="mb-6">
          <UFormGroup name="password" :label="$t('messages.form.password')">
            <UInput
              v-model="formData.currentPassword"
              type="password"
              size="xl"
              :placeholder="$t('messages.form.password')"
              required
            />
          </UFormGroup>
        </div>
        <div class="mb-6">
          <UFormGroup
            name="new-password"
            :label="$t('messages.form.newPassword')"
          >
            <UInput
              v-model="formData.newPassword"
              :type="showPassword ? 'text' : 'password'"
              size="xl"
              :placeholder="$t('messages.form.newPassword')"
              required
            />
          </UFormGroup>
        </div>
        <div class="mb-6">
          <UFormGroup
            name="confirm-new-password"
            :label="$t('messages.form.confirmNewPassword')"
            :error="
              validate && formData.newPassword !== formData.newPasswordConfirm
                ? $t('messages.account.passwordNotMatch')
                : ''
            "
          >
            <UInput
              v-model="formData.newPasswordConfirm"
              :type="showPassword ? 'text' : 'password'"
              size="xl"
              :placeholder="$t('messages.form.confirmNewPassword')"
              required
            />
          </UFormGroup>
        </div>
      </div>
      <UCheckbox
        v-model="showPassword"
        :label="$t('messages.account.showPassword')"
        class="mb-10"
      />
      <UButton
        color="primary"
        size="xl"
        :label="$t('messages.form.submit')"
        type="submit"
        :loading="false"
      />
    </form>
  </div>
</template>
