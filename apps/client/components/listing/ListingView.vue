<script lang="ts" setup>
const { updateProductList, data, loading } = useProductList();

async function updateListing() {
  await updateProductList();
}
</script>

<template>
  <div>
    <ListingSkeleton v-if="loading" />
    <ListingContainer v-if="data && !loading">
      <template #active-filters>
        <ListingFiltersActive
          :filters="data.filters"
          @update-product-list="updateListing"
        />
      </template>
      <template #toolbar-top>
        <ListingItemsCount :count="data.totalCount" />
        <ListingSort :sort="data.sort" @update-product-list="updateListing" />
      </template>
      <template #sidebar>
        <FilterContainer>
          <ListingFilters
            :filters="data.filters"
            @update-product-list="updateListing"
          />
        </FilterContainer>
      </template>
      <template #grid>
        <ListingGrid :count="data.totalCount">
          <ListingItem
            v-for="product in data.items"
            :key="product.sku"
            :product="product"
          />
        </ListingGrid>
      </template>
      <template #toolbar-bottom>
        <ListingToolbar>
          <ListingPagination
            :pagination="data.pageInfo"
            :total-count="data.totalCount"
            @update-product-list="updateListing"
          />
        </ListingToolbar>
      </template>
    </ListingContainer>
  </div>
</template>
