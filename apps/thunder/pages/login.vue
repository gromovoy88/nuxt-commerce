<script lang="ts" setup>
useHead({
  title: 'Login',
  titleTemplate: '%s - Thunder Commerce',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '- Thunder Commerce'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});

definePageMeta({
  middleware: ['guest']
});
</script>

<template>
  <ContainerOneColumn>
    <div class="py-20 md:flex">
      <CustomerLoginForm />
    </div>
  </ContainerOneColumn>
</template>
