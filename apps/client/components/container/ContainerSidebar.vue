<template>
  <UContainer>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <aside class="lg:col-span-1">
        <slot name="sidebar" />
      </aside>
      <section class="lg:col-span-3">
        <slot name="main" />
      </section>
    </div>
  </UContainer>
</template>
