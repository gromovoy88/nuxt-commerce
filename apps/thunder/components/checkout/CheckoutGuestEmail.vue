<script lang="ts" setup>
const { t } = useI18n();
const { setGuestEmailToCart } = useCart();
const { data: cart } = useCart();
const { getCartId } = useCartToken();
const { showError } = useUiErrorHandler();

const email = ref(cart.value?.email ?? '');
const editEmail = ref(!cart.value?.email);
const validationErrorMessage = ref('');
const loading = ref(false);

async function setGuestEmailAddress(): Promise<void> {
  loading.value = true;

  const data = await setGuestEmailToCart(getCartId(), email.value);

  if (!data) {
    showError('Unable to set email address');
    return;
  }

  cart.value = data;
  loading.value = false;
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.value || !regex.test(email.value)) {
    validationErrorMessage.value = t('messages.error.email');
    return false;
  }

  validationErrorMessage.value = '';

  return true;
}

async function handleSaveEmail() {
  if (validateEmail()) {
    await setGuestEmailAddress();
    toggleEditEmail();
  }
}

function toggleEditEmail() {
  editEmail.value = !editEmail.value;
}

const isEmailAddress = computed(() => !!cart.value?.email);
</script>

<template>
  <form @submit.prevent="handleSaveEmail">
    <FormField
      id="fEmail"
      v-model="email"
      :label="$t('messages.form.email')"
      type="email"
      name="fEmail"
      :placeholder="$t('messages.form.email')"
      :error="validationErrorMessage"
      :disabled="!editEmail"
      class="mb-4"
    />
    <UButton
      v-if="!isEmailAddress || editEmail"
      color="primary"
      size="xl"
      :label="'Save'"
      type="submit"
      :loading="loading"
    />
    <UButton
      v-if="isEmailAddress && !editEmail"
      color="gray"
      variant="link"
      :padded="false"
      size="xl"
      :label="'Edit'"
      @click="toggleEditEmail"
    />
  </form>
</template>
