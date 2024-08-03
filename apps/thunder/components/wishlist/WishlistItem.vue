<script lang="ts" setup>
import type { WishlistItem } from '@thunder/types';

const { item } = defineProps<{
  item: WishlistItem;
}>();

defineEmits(['remove-item']);
</script>

<template>
  <div v-if="item && item.product">
    <ListingItem :product="item.product" />
    <UButton
      class="mt-4"
      variant="link"
      :label="$t('messages.shop.removeFromWishlist')"
      @click="$emit('remove-item', item.id)"
    />
  </div>
</template>
