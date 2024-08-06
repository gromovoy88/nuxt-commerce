<script lang="ts" setup>
const { data: cartData } = useFetch('/api/cart/123');
const { data: customerData } = useFetch('/api/customer');
const { data: storeConfigData } = useFetch('/api/store/config');
const { data: categoriesListData } = useFetch('/api/categories');
const { data: categoryData } = useFetch('/api/category/123');
const { data: megaMenuData } = useFetch('/api/menu');
const { data: productListData } = useFetch('/api/products');
const { data: productData } = useFetch('/api/product/123');
const { data: productPageData } = useFetch('/api/product-page/123');
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
  <div>
    Category
    {{ categoryData }}
  </div>
  <div>
    Product List
    {{ productListData }}
  </div>
  <div>
    Product single
    {{ productData }}
  </div>
  <div>
    Product page
    {{ productPageData }}
  </div>
  <div>
    Mega menu
    {{ megaMenuData }}
  </div>
</template>

<style>
div {
  margin-bottom: 20px;
}
</style>
