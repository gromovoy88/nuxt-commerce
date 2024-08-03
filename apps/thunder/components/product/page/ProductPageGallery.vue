<script setup lang="ts">
import type { ProductPage } from '@thunder/types';

const { product } = defineProps<{
  product: ProductPage;
}>();

const { previewImageUrl, setPreviewImage } = usePreviewImage();

const activeImageIndex = ref(0);

const galleryItems = computed(() => product.mediaGallery);

function setActiveImageIndex(index: number) {
  activeImageIndex.value = index;
  setPreviewImage('');
}

setPreviewImage('');
</script>

<template>
  <div v-if="galleryItems.length" class="w-full">
    <div class="mb-4">
      <div v-if="previewImageUrl">
        <NuxtImg
          :src="previewImageUrl ?? ''"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div v-else class="flex items-center justify-center">
        <NuxtImg
          :src="galleryItems[activeImageIndex].url ?? ''"
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>
    <div
      v-if="galleryItems.length > 1"
      class="grid grid-cols-4 gap-4 md:grid-cols-6"
    >
      <div v-for="(image, index) in galleryItems" :key="image?.label ?? ''">
        <NuxtImg
          :src="image.url ?? ''"
          class="h-full w-full object-cover object-center"
          :class="{ 'border-primary-400 border': index === activeImageIndex }"
          @click="setActiveImageIndex(index)"
        />
      </div>
    </div>
  </div>
</template>
