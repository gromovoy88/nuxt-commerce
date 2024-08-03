<script lang="ts" setup>
const isOpen = ref(false);
</script>

<template>
  <div>
    <div
      class="hidden rounded-lg bg-white p-4 text-gray-800 shadow-sm lg:block dark:text-gray-100 lg:dark:bg-gray-700"
    >
      <slot />
    </div>

    <span
      class="flex items-center hover:cursor-pointer lg:hidden"
      @click="isOpen = true"
    >
      <UButton
        color="primary"
        size="xl"
        variant="outline"
        :label="$t('messages.shop.filters')"
        block
      >
        <template #leading>
          <Icon name="solar:hamburger-menu-linear" class="mr-2 text-lg" />
        </template>
      </UButton>
    </span>

    <USlideover v-model="isOpen" side="left">
      <div class="overflow-y-scroll p-8">
        <div class="mb-6 flex justify-between">
          <p class="mb-4 text-2xl font-bold">
            {{ $t('messages.shop.filters') }}
          </p>
          <Icon
            name="ri:close-fill"
            class="text-2xl hover:cursor-pointer"
            @click="isOpen = false"
          />
        </div>
        <slot />
      </div>
    </USlideover>
  </div>
</template>
