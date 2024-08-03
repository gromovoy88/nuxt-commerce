<template>
  <div
    class="mx-auto w-full rounded-lg bg-white p-6 text-gray-800 shadow-sm dark:text-gray-100 md:dark:bg-gray-700"
  >
    <div class="mb-6 flex justify-between hover:cursor-pointer">
      <div class="text-lg font-bold">
        <slot name="title" />
      </div>
    </div>

    <div>
      <slot name="content" />
    </div>
  </div>
</template>
