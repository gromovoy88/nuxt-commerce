<script lang="ts" setup>
const props = defineProps<{
  sku: string;
}>();

const { t } = useI18n();
const { errors, clearErrors } = useAddToCartForm();
const { fetchProductConfigurable } = useProductApi();

const { data } = await fetchProductConfigurable(props.sku);

const products = data.value.products;

const configurableProduct = products?.items?.[0];

errors.value.push(t('messages.shop.chooseVariant'));

onBeforeUnmount(() => {
  clearErrors();
});
</script>

<template>
  <div
    v-if="
      configurableProduct &&
      isTypename(configurableProduct, ['ConfigurableProduct'])
    "
  >
    <ProductConfigurableOptions :product="configurableProduct" />
  </div>
</template>
