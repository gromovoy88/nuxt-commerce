<script setup lang="ts">
const slides = ['/images/slider/slide2.png', '/images/slider/slide1.png'];
</script>

<template>
  <div class="relative w-full lg:h-[500]">
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      :navigation="true"
      :pagination="true"
      :loop="true"
      :modules="[SwiperNavigation, SwiperPagination]"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <NuxtImg
          :src="slide"
          width="1214"
          height="500"
          class="rounded-lg"
          alt="Demo Product Banner"
          format="webp"
          quality="75"
          lazy="true"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
