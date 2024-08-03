<script setup lang="ts">
import type { Product } from '@thunder/types';

const { product } = defineProps<{ product: Product }>();

const { t } = useI18n();

const quantity = ref(1);

const price = computed(() => product.priceRange.minPrice.finalPrice);

const labels = computed(() => {
  const result = [];

  if (product.sale) {
    result.push(t('messages.shop.sale'));
  }

  return [];
});

defineEmits<{
  'add-to-cart': [{ sku: string; quantity: number }];
  'add-to-wishlist': [{ sku: string }];
}>();
</script>

<template>
  <div class="product-card relative flex h-full flex-col">
    <div class="relative rounded-lg bg-white p-4">
      <div v-if="labels.length" class="absolute left-2 top-2">
        <span
          v-for="label in labels"
          :key="label"
          class="inline-block rounded-full bg-green-200 px-2 py-1 text-xs uppercase last:mr-0"
        >
          {{ label }}
        </span>
      </div>
      <div class="absolute right-2 top-2 z-10">
        <UButton
          color="primary"
          variant="ghost"
          size="lg"
          :title="$t('messages.shop.addToWishlist')"
          @click.prevent="$emit('add-to-wishlist', { sku: product.sku })"
        >
          <template #leading>
            <Icon
              name="solar:heart-linear"
              class="text-2xl"
              :title="$t('messages.shop.addToWishlist')"
            />
          </template>
        </UButton>
      </div>
      <div>
        <NuxtImg
          :src="product.thumbnail.url"
          height="229"
          :alt="product.thumbnail.label"
          :title="product.name"
          format="webp"
          quality="75"
          loading="lazy"
          class="mx-auto w-full lg:h-[229px] lg:w-auto"
        />
      </div>
      <div class="absolute bottom-2 left-2">
        <StarRating
          :value="product.ratingSummary"
          :size="'12px'"
          class="mr-2"
        />
      </div>
    </div>
    <div class="flex h-full flex-col pt-4">
      <BaseTypography>
        <span class="font-bold">{{ product.name }}</span>
      </BaseTypography>
      <BaseTypography variant="caption">
        <span v-html="product.shortDescription"></span>
      </BaseTypography>
      <div class="mt-auto">
        <BaseTypography class="flex items-center justify-between">
          <MoneyValue
            :value="price.value"
            :currency="price.currency"
            class="font-bold"
          />
          <UButton
            color="green"
            variant="ghost"
            size="lg"
            :title="$t('messages.shop.addToCart')"
            @click.prevent="
              $emit('add-to-cart', { sku: product.sku, quantity })
            "
          >
            <template #leading>
              <Icon
                name="solar:cart-large-minimalistic-linear"
                class="text-2xl"
                :title="$t('messages.shop.addToCart')"
              />
            </template>
          </UButton>
        </BaseTypography>
      </div>
    </div>
  </div>
</template>
