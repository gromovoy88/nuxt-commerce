<script setup lang="ts">
import type { ProductPage } from '@thunder/types';

const { product } = defineProps<{
  product: ProductPage;
}>();
</script>

<template>
  <div class="md:p-6">
    <div class="mb-6">
      <slot name="title">
        <h1>{{ product.name ?? '' }}</h1>
      </slot>
    </div>

    <div class="mb-4 flex items-center gap-2 md:mb-6">
      <slot name="attributes">
        <span class="text-gray-400">{{ $t('messages.shop.sku') }}: </span>
        <span>{{ product.sku ?? '' }}</span>
      </slot>
    </div>

    <div class="mb-4 flex items-center justify-start md:mb-6">
      <slot name="price" />
    </div>

    <div class="mb-4 flex flex-col gap-4 md:mb-6">
      <StarRating :value="product.ratingSummary ?? 0" :size="'24px'" />
      <a
        href="#reviews"
        class="cursor-pointer text-sm font-normal leading-3 text-gray-500 underline duration-100 hover:text-gray-700"
      >
        {{ product.reviewCount }} {{ $t('messages.shop.reviews') }}
      </a>
    </div>

    <div class="mb-6 text-sm text-gray-700 md:mb-10">
      <span v-html="product.shortDescription" />
    </div>

    <slot name="options">
      <div />
    </slot>

    <div class="mt-8 md:mt-12">
      <slot name="add-to-cart">
        <ProductPageAddToCartActions :product="product">
          <template #secondary-actions>
            <ProductAddToWishlist
              :name="product.name ?? ''"
              :sku="product.sku ?? ''"
            />
          </template>
        </ProductPageAddToCartActions>
      </slot>
    </div>
  </div>
</template>
