<template>
  <ContainerOneColumn>
    <div class="mb-6">
      <slot name="breadcrumbs" />
    </div>
    <div
      class="item-start relative grid grid-cols-1 justify-start py-6 md:px-8 md:py-16 lg:grid-cols-2 lg:gap-8 lg:px-16 lg:py-12"
    >
      <div class="mb-8 w-full lg:mb-0">
        <slot name="gallery" />
      </div>
      <div class="flex w-full flex-col items-start justify-start">
        <slot name="info" />
      </div>
    </div>

    <hr class="w-full bg-slate-100" />

    <div class="w-full pt-12">
      <div class="flex flex-col gap-y-8 md:gap-y-12">
        <slot name="content" />
      </div>
    </div>
  </ContainerOneColumn>
</template>
