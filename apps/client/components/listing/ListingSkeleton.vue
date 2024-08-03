<script lang="ts" setup>
const gridItemsCount = 9;
</script>

<template>
  <ListingContainer>
    <template #breadcrumbs>
      <div>
        <USkeleton class="h-5 w-full bg-gray-200" />
      </div>
    </template>
    <template #page-info>
      <div>
        <USkeleton class="h-9 w-full bg-gray-200" />
      </div>
    </template>
    <template #toolbar-top>
      <div>
        <USkeleton class="h-6 w-full bg-gray-200" />
      </div>
    </template>
    <template #sidebar>
      <div>
        <USkeleton class="h-screen w-full bg-gray-200" />
      </div>
    </template>
    <template #grid>
      <div
        class="grid h-screen grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <USkeleton
          v-for="i in gridItemsCount"
          :key="i"
          class="h-full w-full bg-gray-200"
        />
      </div>
    </template>
    <template #toolbar-bottom>
      <div>
        <USkeleton class="h-10 w-full bg-gray-200" />
      </div>
    </template>
  </ListingContainer>
</template>
