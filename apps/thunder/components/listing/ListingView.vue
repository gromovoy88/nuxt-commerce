<script lang="ts" setup>
const { data, loading, updateProductList } = useProductList();
</script>

<template>
  <div>
    <ListingSkeleton v-if="loading" />
    <ListingContainer v-if="data">
      <template #active-filters>
        <ListingFiltersActive
          :filters="data.filters"
          @update-product-list="updateProductList"
        />
      </template>
      <template #toolbar-top>
        <ListingItemsCount :count="data.totalCount" />
        <ListingSort
          :sort="data.sort"
          @update-product-list="updateProductList"
        />
      </template>
      <template #sidebar>
        <FilterContainer>
          <ListingFilters
            :filters="data.filters"
            @update-product-list="updateProductList"
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
            @update-product-list="updateProductList"
          />
        </ListingToolbar>
      </template>
    </ListingContainer>
  </div>
</template>
