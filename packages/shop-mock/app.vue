<script lang="ts" setup>
const { data: cartData } = useFetch('/api/cart');
const { data: customerData } = useFetch('/api/customer');
const { data: storeConfigData } = useFetch('/api/store/config');
const { data: categoriesListData } = useFetch('/api/category/list');
</script>

<template>
  <div>
    Cart
    {{ cartData }}
  </div>
  <div>
    Customer
    {{ customerData }}
  </div>
  <div>
    StoreConfig
    {{ storeConfigData }}
  </div>
  <div>
    Categories
    {{ categoriesListData }}
  </div>
</template>

<style>
div {
  margin-bottom: 20px;
}
</style>
