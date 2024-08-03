<script lang="ts" setup>
export type BaseTypographyVariant =
  | 'body'
  | 'heading'
  | 'subtitle'
  | 'caption'
  | 'link';

export type BaseTypographyProps = {
  variant?: BaseTypographyVariant;
  color?: string;
};

const props = withDefaults(defineProps<BaseTypographyProps>(), {
  variant: 'body',
  color: 'text-gray-800 dark:text-gray-100'
});

const variantClasses = computed(() => {
  return {
    body: 'text-base font-normal',
    heading: 'text-3xl font-semibold leading-7 xl:text-4xl xl:leading-9',
    subtitle: 'text-xl font-medium',
    caption: 'text-sm text-gray-600',
    link: 'text-base hover:text-gray-500 focus:underline focus:outline-none'
  };
});

function getTextClasses() {
  return [variantClasses.value[props.variant], props.color];
}
</script>

<template>
  <div :class="getTextClasses()">
    <slot />
  </div>
</template>
