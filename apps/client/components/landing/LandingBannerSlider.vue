<script setup lang="ts">
const slides = [
  {
    url: '/images/slider/slide1.png',
    title: 'Autumn news from Sushi',
    subtitle: 'Let`s try this out!'
  },
  {
    url: '/images/slider/slide2.png',
    title: 'Winter magic from Sushi: 6 new rolls and a sushi burger',
    subtitle: 'Let`s try this out!'
  },
  {
    url: '/images/slider/slide3.png',
    title: 'Asian cuisine at Sushi',
    subtitle: 'Let`s try this out!'
  }
];
</script>

<template>
  <section>
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      :navigation="true"
      :pagination="true"
      :loop="true"
      :modules="[SwiperNavigation, SwiperPagination]"
      class="relative"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="absolute left-[100px] top-[40%] max-w-[300px]">
          <BaseTypography variant="heading" class="mb-4">
            {{ slide.title }}
          </BaseTypography>
          <BaseTypography class="text-3xl">
            {{ slide.subtitle }}
          </BaseTypography>
        </div>
        <NuxtImg
          :src="slide.url"
          class="w-full rounded-lg"
          :alt="slide.title"
          format="webp"
          quality="75"
          lazy="true"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
