<script lang="ts" setup>
const props = defineProps<{
  modelValue: string | number;
  label?: string;
  id: string;
  name?: string;
  placeholder?: string;
  options: any[];
  optionLabelKey?: string;
  optionValueKey?: string;
  disabled?: boolean;
  required?: boolean;
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
  <div>
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-gray-700 dark:text-gray-200"
    >
      {{ label }}
    </label>
    <div class="relative">
      <select
        :id="id"
        v-model="value"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled ?? false"
        :required="required"
        class="focus:ring-primary-500 dark:focus:ring-primary-400 w-full appearance-none rounded-md bg-white px-3.5 py-2.5 text-base outline-none ring-1 ring-inset ring-gray-300 focus:shadow-md focus:ring-2 dark:bg-transparent dark:ring-gray-700"
      >
        <option v-if="placeholder" value="" disabled selected>
          {{ placeholder }}
        </option>
        <option
          v-for="option in options"
          :key="option[optionValueKey ?? 'value']"
          class="mb-2 hover:cursor-pointer"
          :value="option[optionValueKey ?? 'value']"
        >
          {{ option[optionLabelKey ?? 'label'] }}
        </option>
      </select>
      <svg
        class="absolute right-2 top-3.5 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>
