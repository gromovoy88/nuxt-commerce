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
      <AccountOrders />
    </template>
  </ContainerSidebar>
</template>
