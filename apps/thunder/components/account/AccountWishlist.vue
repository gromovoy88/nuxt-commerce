<script lang="ts" setup>
const { fetchWishlistProducts } = useWishlistApi();

const { data } = await fetchWishlistProducts({ pageSize: 16, currentPage: 1 });
</script>

<template>
  <div>
    <BaseCard class="min-h-[500px] lg:p-12">
      <BaseTypography variant="heading" class="mb-6">
        <h1>
          {{ $t('messages.account.wishlist') }}
        </h1>
      </BaseTypography>
      <div v-if="data">
        <ul class="flex flex-col">
          <div v-for="wishlist in data" :key="wishlist.id">
            <WishlistList :wishlist="wishlist" />
          </div>
        </ul>
      </div>
    </BaseCard>
  </div>
</template>
