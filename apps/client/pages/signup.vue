<script lang="ts" setup>
useHead({
  title: 'Sign up',
  titleTemplate: '%s - Thunder Commerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      <CustomerRegisterForm />
    </div>
  </ContainerOneColumn>
</template>
