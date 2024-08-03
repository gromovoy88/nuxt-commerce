<script lang="ts" setup>
import type { Review } from '@thunder/types';

defineProps<{
  review: Review;
}>();
</script>

<template>
  <div>
    <div class="flex w-full flex-col justify-between md:flex-row">
      <div class="flex flex-row items-start justify-between">
        <p class="text-xl font-medium leading-normal text-gray-800 md:text-2xl">
          {{ review.summary }}
        </p>
      </div>
      <div class="mt-2 cursor-pointer md:mt-0">
        <StarRating :value="review.averageRating" :size="'24px'" />
      </div>
    </div>
    <div>
      <p
        class="mt-3 w-full text-base leading-normal text-gray-600 md:w-9/12 xl:w-5/6"
      >
        {{ review.text }}
      </p>
      <div class="mt-6 flex flex-row items-center justify-start space-x-2.5">
        <div>
          <UAvatar size="md" :alt="review.nickname" />
        </div>
        <div class="flex flex-col items-start justify-start space-y-2">
          <p class="text-base font-medium leading-none text-gray-800">
            {{ review.nickname }}
          </p>
          <p class="text-sm leading-none text-gray-600">
            {{ review.createdAt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
