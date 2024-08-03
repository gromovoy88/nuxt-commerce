<script lang="ts" setup>
useHead({
  title: 'Thunder - Headless',
  meta: [
    {
      name: 'description',
      content: 'Headless application for Magento 2'
    }
  ]
});
</script>

<template>
  <ContainerOneColumn class="flex flex-col gap-12 lg:gap-20">
    <LazyLandingBannerSlider />
    <LazyLandingBrandsGrid />
    <LazyLandingCmsContent />
    <LazyLandingBestsellers />
    <LandingSingleBanner />
    <LazyLandingOnSale />
    <UDivider />
    <LandingAboutSection />
    <LandingBrands />
  </ContainerOneColumn>
</template>
