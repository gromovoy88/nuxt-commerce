<script setup lang="ts">
interface StepIndicatorProps {
  step: number;
  currentStep: number;
  label: string;
}

const props = defineProps<StepIndicatorProps>();

const isCurrentStep = computed(() => props.step === props.currentStep);
const isCompletedStep = computed(() => props.step < props.currentStep);
</script>

<template>
  <div
    class="step-indicator relative flex w-40 flex-col items-center text-sm"
    :class="{ 'step-indicator-complete': isCompletedStep }"
  >
    <div
      v-if="isCompletedStep"
      class="bg-primary flex h-8 w-8 items-center justify-center rounded-full text-white"
    >
      {{ props.step }}
    </div>
    <div
      v-else
      class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100"
      :class="{ 'bg-gray-100': isCurrentStep }"
    >
      {{ props.step }}
    </div>
    <div>{{ props.label }}</div>
  </div>
</template>

<style lang="postcss">
.step-indicator {
  &:after,
  &:before {
    @apply absolute top-4 -z-10 w-1/2 border-b border-slate-200;
    content: '';
  }

  &:after {
    @apply right-0;
  }

  &:before {
    @apply left-0;
  }

  &:first-child {
    &:before {
      content: none;
    }
  }

  &:last-child {
    &:after {
      content: none;
    }
  }
}

.step-indicator-complete {
  &:after,
  &:before {
    @apply border-primary border;
  }
}
</style>
