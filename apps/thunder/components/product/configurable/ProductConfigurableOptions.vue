<script lang="ts" setup>
import type { ProductListItemConfigurableFragment } from '@thunder/magento/graphql/generated/graphql';

type ChangeVariantData = {
  attributeCode: string;
  attributeUid: string;
};

const { product } = defineProps<{
  product: ProductListItemConfigurableFragment;
}>();

const { updateInput, clearErrors } = useAddToCartForm();
const { setPreviewImage } = usePreviewImage();

const variantData: Ref<Record<string, string>> = ref({});

const variants = computed(
  () => product.variants?.map((variant) => variant!) ?? []
);
const options = computed(
  () => product.configurable_options?.map((option) => option!) ?? []
);

function updateProductPreview(code: string, uid: string) {
  if (code !== 'color') {
    return;
  }

  const previewVariant = variants.value.find((variant) =>
    variant.attributes?.some(
      (attribute) => code === attribute?.code && attribute?.uid === uid
    )
  );

  if (previewVariant) {
    setPreviewImage(previewVariant.product?.image?.url ?? '');
  }
}

function selectOption({ attributeCode, attributeUid }: ChangeVariantData) {
  variantData.value = {
    ...variantData.value,
    [attributeCode]: attributeUid
  };

  const selectedVariant = variants.value.find((variant) =>
    variant.attributes?.every(
      (attribute) => variantData.value[attribute?.code ?? ''] === attribute?.uid
    )
  );

  updateProductPreview(attributeCode, attributeUid);

  if (selectedVariant) {
    updateInput({
      sku: product.sku ?? '',
      selectedOptions: Object.values(variantData.value)
    });
    clearErrors();
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <SwatchText
      v-for="(option, index) in options"
      :key="index"
      :option="option"
      @select-option="selectOption"
    />
  </div>
</template>
