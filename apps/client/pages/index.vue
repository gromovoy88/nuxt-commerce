<script lang="ts" setup>
useHead({
  title: 'Sushi - Delivery, takeaway',
  meta: [
    {
      name: 'description',
      content: 'Headless application for Magento 2'
    }
  ]
});
definePageMeta({
  layout: 'aside'
});
</script>

<template>
  <div>
    <ContainerOneColumn
      :full-width="true"
      :no-padding="true"
      class="bg-white pb-8"
    >
      <LazyLandingBannerSlider />
      <LazyLandingAboutSection />
      <LazyLandingBestsellers />
    </ContainerOneColumn>
    <ContainerOneColumn
      :full-width="true"
      class="flex flex-col gap-12 lg:gap-20"
    >
      <LazyLandingOnSale />
    </ContainerOneColumn>
  </div>
</template>
