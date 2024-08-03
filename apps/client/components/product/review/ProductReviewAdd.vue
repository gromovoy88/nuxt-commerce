<script lang="ts" setup>
const { productName, productSku } = defineProps<{
  productName: string;
  productSku: string;
}>();

const { addReview, fetchReviewMetadata } = useReviewApi();

const isOpen = ref(false);
const isSuccess = ref(false);
const error = ref('');

const { data } = await fetchReviewMetadata();

const ratings = ref(data ?? []);
const ratingsData = ref(
  ratings.value.map((rating) => ({ id: rating.id, valueId: '' }))
);

const reviewFormData = reactive({
  nickname: '',
  summary: '',
  text: ''
});

async function submitReviewForm() {
  const { data: review, error: reviewError } = await addReview({
    ...reviewFormData,
    sku: productSku,
    ratings: ratingsData.value.map((rating) => ({
      ratingId: rating.id,
      ratingValueId: rating.valueId
    }))
  });

  if (!review) {
    error.value = reviewError?.message ?? 'Can`t add a review';
  }

  isSuccess.value = !!review;
}

function resetReviewForm() {
  isSuccess.value = false;
  isOpen.value = false;
}

function updateRatingsData({ id, value }: { id: string; value: string }) {
  const ratingData = ratingsData.value.find((item) => item.id === id);

  if (ratingData) {
    ratingData.valueId = value;
  }
}
</script>

<template>
  <div class="flex w-full justify-center">
    <UButton
      color="primary"
      variant="outline"
      size="xl"
      :label="$t('messages.shop.writeReview')"
      @click="isOpen = true"
    />

    <UModal v-model="isOpen">
      <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <p
            v-if="!isSuccess"
            class="py-4 text-xl font-medium leading-normal text-gray-800 md:text-2xl"
          >
            {{ $t('messages.shop.reviewing').replace('%1', productName) }}
          </p>

          <p
            v-else
            class="py-4 text-xl font-medium leading-normal text-gray-800 md:text-2xl"
          >
            {{ $t('messages.shop.reviewThanks') }}
          </p>
        </template>

        <form v-if="!error && !isSuccess" @submit.prevent="submitReviewForm">
          <UInput
            v-model="reviewFormData.nickname"
            size="lg"
            class="mb-4"
            required
            :placeholder="$t('messages.form.firstName')"
          />
          <ProductReviewRatingInput
            v-for="rating in ratings"
            :key="rating.id"
            :rating="rating"
            :size="'24px'"
            class="mb-4"
            @update-rating="updateRatingsData"
          />

          <UInput
            v-model="reviewFormData.summary"
            size="lg"
            class="mb-4"
            required
            :placeholder="$t('messages.form.summary')"
          />
          <UTextarea
            v-model="reviewFormData.text"
            size="lg"
            class="mb-4"
            required
            :placeholder="$t('messages.form.review')"
          />
          <UButton
            color="primary"
            size="xl"
            :label="$t('messages.shop.writeReview')"
            type="submit"
          />
        </form>

        <UButton
          v-if="isSuccess"
          color="primary"
          variant="outline"
          size="xl"
          :label="$t('messages.shop.continueShopping')"
          @click="resetReviewForm"
        />

        <div v-if="error">
          {{ $t('messages.error.general') }}
        </div>
      </UCard>
    </UModal>
  </div>
</template>
