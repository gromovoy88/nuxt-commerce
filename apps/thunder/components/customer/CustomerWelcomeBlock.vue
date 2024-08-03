<script lang="ts" setup>
const { data: customer } = useCustomer();
const { logout } = useAuth();
const { resetCart } = useCart();
const localePath = useLocalePath();

const { showError } = useUiErrorHandler();

async function handleLogout() {
  try {
    await logout();

    setTimeout(async () => {
      await resetCart();

      navigateTo({
        path: localePath(paths.home)
      });
    }, 0);
  } catch (error) {
    showError(error);
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div v-if="customer">
      <div>
        <div class="mb-4">
          {{ $t('messages.general.welcome') }}, {{ customer.firstName }}
          {{ customer.lastName }}
        </div>
        <div class="flex gap-4">
          <NuxtLink :to="localePath(paths.account)">
            <UButton
              color="white"
              :label="$t('messages.account.yourAccount')"
              variant="solid"
            >
              <template #leading>
                <Icon name="solar:user-circle-outline" class="text-2xl" />
              </template>
            </UButton>
          </NuxtLink>
          <UButton
            color="white"
            :label="$t('messages.account.logout')"
            variant="ghost"
            class="text-white hover:text-black"
            @click="handleLogout"
          >
            <template #leading>
              <Icon name="solar:exit-linear" class="text-2xl" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="mb-4 flex gap-4">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600"
        >
          <Icon name="solar:user-circle-outline" class="text-2xl text-white" />
        </div>
        <div class="flex gap-4">
          <NuxtLink :to="localePath(paths.authLogin)">
            <UButton
              color="white"
              :label="$t('messages.account.signIn')"
              variant="ghost"
              class="text-white hover:text-black"
            />
          </NuxtLink>
          <NuxtLink :to="localePath(paths.authSignup)">
            <UButton
              color="white"
              :label="$t('messages.account.signUp')"
              variant="ghost"
              class="text-white hover:text-black"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="px-4 text-sm text-gray-400 dark:text-gray-100">
        <p>{{ $t('messages.account.loginMessage') }}</p>
      </div>
    </div>
  </div>
</template>
