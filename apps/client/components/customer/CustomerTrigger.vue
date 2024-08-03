<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath('/login')">
    <UButton
      color="black"
      variant="ghost"
      size="xl"
      :title="$t('messages.account.yourAccount')"
      :padded="false"
    >
      <template #leading>
        <Icon name="solar:user-circle-linear" class="text-3xl" />
        <span class="hidden lg:block">{{
          $t('messages.account.yourAccount')
        }}</span>
      </template>
    </UButton>
  </NuxtLink>
</template>
