<script setup lang="ts">
defineProps({
  error: Error
});

function handleError() {
  clearError({ redirect: '/' });
}
</script>

<template>
  <ContainerOneColumn v-if="error">
    <div class="flex h-screen items-center justify-center">
      <div
        class="mx-auto w-full max-w-lg rounded-lg bg-white px-10 py-8 shadow-xl"
      >
        <div class="mx-auto max-w-md space-y-6">
          <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1
                class="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl"
              >
                500
              </h1>
              <p
                class="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl"
              >
                Internal Server Error.
              </p>
              <p
                class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400"
              >
                {{ error.message }}
              </p>
              <UButton
                size="xl"
                label="Back To Homepgage"
                @click="handleError"
              ></UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContainerOneColumn>
</template>
