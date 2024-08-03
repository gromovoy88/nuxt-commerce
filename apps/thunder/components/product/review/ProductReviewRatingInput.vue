<script lang="ts" setup>
import type { Rating } from '@thunder/types';

const { rating, size } = defineProps<{
  size: string;
  rating: Rating;
}>();

const ratingValues = computed(() => rating.values);

const inputValue = ref('');

const emits = defineEmits(['update-rating']);

function setRating(id: string, value: string) {
  inputValue.value = value;
  emits('update-rating', { id, value });
}
</script>

<template>
  <div class="relative flex">
    <button
      v-for="(ratingItem, index) in ratingValues"
      :key="ratingItem.value"
      type="button"
      :class="{ 'mr-1': index < 5 }"
    >
      <div @mouseenter="setRating(rating.id, ratingItem.value)">
        <Icon
          :size="size || '24px'"
          :color="[inputValue >= ratingItem.value ? 'yellow' : 'lightgrey']"
          name="solar:star-bold"
        />
      </div>
    </button>
    <input
      v-model="inputValue"
      class="absolute left-0 top-0 -z-10 w-full"
      type="text"
      required
      :name="`rating-${rating.id}`"
    />
  </div>
</template>
