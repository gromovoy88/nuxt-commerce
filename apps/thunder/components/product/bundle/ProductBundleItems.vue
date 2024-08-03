<script lang="ts" setup>
import type { ProductListItemBundleFragment } from '@thunder/magento/graphql/generated/graphql';

const { product } = defineProps<{
  product: ProductListItemBundleFragment;
}>();

const bundleItems = computed(() => product?.items ?? []);

const { updateInput } = useAddToCartForm();

updateInput({
  selectedOptions:
    bundleItems.value.map((item) => item?.options?.[0]?.uid ?? '') ?? []
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="bundleItem in bundleItems"
      :key="bundleItem?.uid ?? ''"
      class="flex gap-4"
    >
      <span>{{ bundleItem?.title }}</span>
      <span>x</span>
      <span>{{ bundleItem?.options?.[0]?.quantity }}</span>
    </div>
  </div>
</template>
