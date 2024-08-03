<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  label?: string;
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  help?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue || '';
  },
  set(value) {
    emit('update:modelValue', value);
  }
});
</script>

<template>
  <UFormGroup :label="label" :help="help" :error="error">
    <UInput
      :id="id"
      v-model="value"
      :placeholder="placeholder ?? ''"
      :type="type ?? 'text'"
      :name="name"
      size="xl"
      :required="required"
      :disabled="disabled"
    />
  </UFormGroup>
</template>
