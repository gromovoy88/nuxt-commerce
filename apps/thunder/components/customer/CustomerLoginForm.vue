<script lang="ts" setup>
import type { LoginUserInput } from '@thunder/magento/types';

const localePath = useLocalePath();
const { login } = useAuth();
const { updateCustomer } = useCustomer();
const { showError } = useUiErrorHandler();
const { setCartId, getCartId } = useCartToken();
const { setCart } = useCart();
const { fetchCustomerCartId } = useCustomerApi();
const { mergeCarts } = useCartApi();

const formData = reactive<LoginUserInput>({
  email: '',
  password: ''
});
const isLoading = ref(false);

async function loginUser() {
  await login(formData);
  await updateCustomer();
}

async function mergeUserCart() {
  try {
    const { data: customerCartId, error: cartIdError } =
      await fetchCustomerCartId();

    if (!customerCartId) {
      throw new Error(cartIdError?.message);
    }

    const { data, error: mergeCartError } = await mergeCarts(
      getCartId(),
      customerCartId.id
    );

    if (!data) {
      throw new Error(mergeCartError?.message);
    }

    setCartId(customerCartId.id);
    setCart(data);
  } catch (error) {
    showError(error);
  }
}

async function handleLogin() {
  try {
    isLoading.value = true;

    await loginUser();
    await mergeUserCart();

    navigateTo({
      path: localePath(paths.account)
    });
  } catch (error) {
    showError(error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div
    class="mx-auto flex flex-col items-center justify-center p-4 md:w-1/2 md:p-10"
  >
    <div class="mb-10 w-full text-center sm:mx-auto">
      <BaseTypography variant="heading">
        <h1>
          {{ $t('messages.account.signIn') }}
        </h1>
      </BaseTypography>
    </div>
    <form class="w-full" @submit.prevent="handleLogin">
      <div class="mb-6">
        <FormField
          id="fEmail"
          v-model="formData.email"
          :label="$t('messages.form.email')"
          type="email"
          name="email"
          :placeholder="$t('messages.form.email')"
          required
        />
      </div>
      <div class="mb-6">
        <FormField
          id="fEmail"
          v-model="formData.password"
          :label="$t('messages.form.password')"
          type="password"
          name="password"
          :placeholder="$t('messages.form.password')"
          required
        />
      </div>
      <div class="mb-10">
        <UButton
          size="xl"
          color="primary"
          :label="$t('messages.account.signIn')"
          block
          :loading="isLoading"
          type="submit"
        />
      </div>
    </form>
    <p class="text-base text-gray-400">
      {{ $t('messages.account.notAMember') }}
      <NuxtLink :to="localePath(paths.authSignup)" title="Sign up">
        {{ $t('messages.account.signUp') }}
      </NuxtLink>
    </p>
  </div>
</template>
