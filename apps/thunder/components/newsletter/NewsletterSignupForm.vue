<script lang="ts" setup>
const { t } = useI18n();
const { subscribeGuestToNewsletter } = useNewsletter();

const email = ref('');
const validationErrorMessage = ref('');
const successMessage = ref('');

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value || !regex.test(email.value)) {
    validationErrorMessage.value = t('messages.error.email');
    return false;
  }

  validationErrorMessage.value = '';

  return true;
}

async function subscribe() {
  if (validateEmail()) {
    const data = await subscribeGuestToNewsletter(email.value);

    if (!data) {
      validationErrorMessage.value = t('messages.newsletter.errorMessage');
      return;
    }

    successMessage.value = t('messages.newsletter.successMessage');
    validationErrorMessage.value = '';
    email.value = '';
  }
}
</script>

<template>
  <div>
    <BaseTypography variant="subtitle">
      <h2 class="mb-6">
        {{ $t('messages.newsletter.letsGetInTouch') }}
      </h2>
    </BaseTypography>
    <div
      v-if="successMessage"
      class="mb-4 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
    >
      {{ successMessage }}
    </div>
    <div v-else>
      <form @submit.prevent="subscribe">
        <div class="flex w-full gap-4">
          <UFormGroup :error="validationErrorMessage" class="flex-1">
            <UInput
              v-model="email"
              size="md"
              :placeholder="$t('messages.newsletter.enterYourEmail')"
            />
          </UFormGroup>
          <div>
            <UButton
              color="primary"
              variant="outline"
              size="md"
              type="submit"
              aria-label="Subscribe"
            >
              <template #trailing>
                <Icon name="solar:arrow-right-linear" class="text-lg" />
              </template>
            </UButton>
          </div>
        </div>
        <p class="mt-2 text-sm text-gray-800 dark:text-gray-400">
          {{ $t('messages.newsletter.subscribeMessage') }}
        </p>
      </form>
    </div>
  </div>
</template>
