<script lang="ts" setup>
type RouteParams = { url: string };

const { data: product, updateProductPage } = useProductPage();

const params = useRoute().params as RouteParams;

await updateProductPage(params.url);

useHead({
  title: computed(() => `${product?.value?.name ?? ''}`),
  titleTemplate: '%s - Thunder Commerce',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: '- Thunder Commerce'
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
});
</script>

<template>
  <div>
    <ProductPageContainer v-if="product">
      <template #breadcrumbs>
        <ProductPageBreadcrumbs :product="product" />
      </template>
      <template #gallery>
        <ProductPageGallery :product="product" />
      </template>
      <template #info>
        <ProductPageAddToCartForm :product="product">
          <ProductPageInfo :product="product">
            <template #title>
              <BaseTypography variant="heading">
                <h1>{{ product.name }}</h1>
              </BaseTypography>
            </template>
            <template #price>
              <ProductPagePrice :product="product" />
            </template>
          </ProductPageInfo>
        </ProductPageAddToCartForm>
      </template>
      <template #content>
        <ProductPageDescription :product="product" />
        <ProductPageUpsell :product-url-key="product.urlKey" />
        <ProductReviewList
          :product-sku="product.sku"
          :product-name="product.name"
        />
        <ProductPageCrosssel :product-url-key="product.urlKey" />
      </template>
    </ProductPageContainer>
  </div>
</template>
