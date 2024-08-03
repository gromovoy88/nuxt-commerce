<script lang="ts" setup>
definePageMeta({
  middleware: ['customer']
});
</script>

<template>
  <ContainerSidebar>
    <template #sidebar>
      <AccountSidebarMenu />
    </template>
    <template #main>
      <AddressEdit />
    </template>
  </ContainerSidebar>
</template>
