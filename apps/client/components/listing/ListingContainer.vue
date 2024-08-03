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
    <ContainerOneColumn>
      <div class="mb-6">
        <slot name="sidebar" />
      </div>
      <div>
        <slot name="grid" />
      </div>
    </ContainerOneColumn>
    <ContainerOneColumn>
      <div class="py-6">
        <slot name="toolbar-bottom" />
      </div>
    </ContainerOneColumn>
  </div>
</template>
