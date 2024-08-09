<script lang="ts" setup>
import type { Wishlist } from '@thunder/types';

const { wishlist } = defineProps<{
  wishlist: Wishlist;
}>();

const { removeProductFromWishlist } = useWishlist();
const wishlistData = ref(wishlist);

const wishlistItems = computed(() => wishlist.items);

async function removeItemFromWishlist(itemId: string) {
  const wishlist = await removeProductFromWishlist(itemId);

  if (wishlist) {
    wishlistData.value = wishlist;
  }
}
</script>

<template>
  <li>
    <ItemCounter class="mb-6" :total-count="wishlistData.itemsCount" />
    <ul
      v-if="wishlistData.items.length"
      class="grid grid-cols-1 gap-4 bg-gray-100 p-4 sm:grid-cols-2 md:grid-cols-3"
    >
      <li v-for="item in wishlistItems" :key="item.id">
        <WishlistItem :item="item" @remove-item="removeItemFromWishlist" />
      </li>
    </ul>
  </li>
</template>
