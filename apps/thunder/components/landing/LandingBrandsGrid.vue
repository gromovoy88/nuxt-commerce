<script setup lang="ts">
const brands = [
  '/images/brands/adidas.png',
  '/images/brands/altra.png',
  '/images/brands/asics.png',
  '/images/brands/brooks.png',
  '/images/brands/nb.png',
  '/images/brands/nike.png',
  '/images/brands/odlo.png',
  '/images/brands/on.png',
  '/images/brands/puma.png',
  '/images/brands/salomon.png'
];
</script>

<template>
  <div class="relative w-full flex-col space-y-8">
    <BaseTypography variant="heading">
      <h2>
        {{ $t('messages.shop.ourBrands') }}
      </h2>
    </BaseTypography>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-10">
      <div
        v-for="(item, index) in brands"
        :key="index"
        class="flex h-[64px] items-center justify-center rounded-lg bg-white p-4"
      >
        <NuxtImg
          :src="item"
          width="64"
          height="32"
          alt="Demo Brand"
          format="webp"
          quality="100"
          lazy="true"
        />
      </div>
    </div>
  </div>
</template>
