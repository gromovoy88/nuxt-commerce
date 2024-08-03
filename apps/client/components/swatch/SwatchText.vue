<script lang="ts" setup>
import type { ProductConfigurableOptionFragment } from '@thunder/magento/graphql/generated/graphql';

const { option } = defineProps<{
  option: ProductConfigurableOptionFragment;
}>();

const emits = defineEmits(['select-option']);

const optionValues = computed(
  () => option.values?.map((value) => value!) ?? []
);

const selectedOption = ref('');

function selectOption(attributeUid: string) {
  emits('select-option', {
    attributeCode: option.attribute_code,
    attributeUid
  });
  selectedOption.value = attributeUid;
}
</script>

<template>
  <div v-if="option" class="flex flex-col">
    <span class="mb-2">{{ option.label }}</span>
    <div class="grid grid-cols-4 gap-4 lg:grid-cols-6">
      <div v-for="value in optionValues" :key="value.uid ?? ''">
        <UButton
          block
          size="lg"
          color="primary"
          :variant="selectedOption === value.uid ? 'solid' : 'outline'"
          :label="value.store_label ?? ''"
          :trailing="false"
          @click="selectOption(value.uid ?? '')"
        />
      </div>
    </div>
  </div>
</template>
