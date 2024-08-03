<script lang="ts" setup>
const { updateMegaMenu } = useMegaMenu();

await updateMegaMenu();

useHead({
  title:
    'Delivery of Japanese cuisine to your home or office. ᐈ Sushi, rolls, sets, snacks, desserts, drinks',
  meta: [
    {
      name: 'description',
      content:
        'Order Japanese cuisine for your home or office ᐈ Sushi, rolls, sets, appetizers, desserts, drinks.'
    }
  ]
});
</script>

<template>
  <NuxtLayout name="aside">
    <NuxtPage />
  </NuxtLayout>
</template>
