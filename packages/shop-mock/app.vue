<script lang="ts" setup>
const { data } = await useFetch('/api/category/23');
</script>

<template>
  <div>
    Some data
    {{ data }}
  </div>
</template>

<style>
div {
  margin-bottom: 20px;
}
</style>
