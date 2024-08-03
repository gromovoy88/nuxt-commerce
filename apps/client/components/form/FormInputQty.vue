<script lang="ts" setup>
const props = defineProps<{
  modelValue: number;
}>();

const emits = defineEmits(['update:modelValue']);

const quantity: Ref<number> = ref(props.modelValue || 1);

function incrementQty() {
  const value = quantity.value;

  quantity.value = value + 1;
}

function decrementQty() {
  const value = quantity.value;

  if (value <= 1) {
    quantity.value = 1;
    return;
  }

  quantity.value = value - 1;
}

watch(quantity, () => {
  const value = quantity.value;

  if (value <= 0) {
    quantity.value = 1;
    return;
  }

  quantity.value = value;

  emits('update:modelValue', value);
});
</script>
<template>
  <div class="flex items-center gap-1 rounded-md p-1">
    <UButton color="primary" variant="ghost" size="sm" @click="decrementQty">
      <template #leading>
        <span class="block w-4 text-xl text-gray-800 dark:text-gray-100"
          >-</span
        >
      </template>
    </UButton>
    <UInput
      :model-value="quantity"
      name="qty-input"
      size="sm"
      class="qty-input max-w-[40px] text-center text-gray-800 dark:text-gray-100"
      color="gray"
      variant="none"
      @update:model-value="
        ($event) => {
          $event && (quantity = parseInt($event || 1));
        }
      "
    />
    <UButton variant="ghost" color="primary" size="sm" @click="incrementQty">
      <template #leading>
        <span class="block w-4 text-xl text-gray-800 dark:text-gray-100"
          >+</span
        >
      </template>
    </UButton>
  </div>
</template>

<style lang="postcss">
.qty-input {
  input {
    @apply text-center;
  }
}
</style>
