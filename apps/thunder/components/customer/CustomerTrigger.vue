<script setup lang="ts">
const isStoreInfoOpen = useState('isStoreInfoOpen', () => false);

function openStoreInfo() {
  isStoreInfoOpen.value = true;
}
</script>

<template>
  <UButton
    title="Customer menu"
    color="black"
    variant="ghost"
    size="xl"
    :padded="false"
    @click.prevent="openStoreInfo"
  >
    <template #leading>
      <Icon name="solar:user-circle-linear" class="text-3xl" />
    </template>
  </UButton>
</template>
