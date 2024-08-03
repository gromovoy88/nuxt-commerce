<template>
  <div>
    <ContainerOneColumn>
      <div class="mb-4 flex items-center justify-between">
        <slot name="toolbar-top" />
      </div>
      <div>
        <slot name="active-filters" />
      </div>
    </ContainerOneColumn>
    <ContainerSidebar>
      <template #sidebar>
        <slot name="sidebar" />
      </template>
      <template #main>
        <slot name="grid" />
      </template>
    </ContainerSidebar>
    <ContainerOneColumn>
      <div class="py-6">
        <slot name="toolbar-bottom" />
      </div>
    </ContainerOneColumn>
  </div>
</template>
