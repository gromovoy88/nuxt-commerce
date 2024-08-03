<script lang="ts" setup>
type RouteParams = { url: string };

const params = useRoute().params as RouteParams;

const { fetchProductPage } = useProductApi();
const { data: product } = await fetchProductPage(params.url);

useHead({
  title: computed(() => `${product?.name ?? ''}`),
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
            <template #options>
              <ProductConfigurableVariants
                v-if="product.type === 'ConfigurableProduct'"
                :sku="product.sku"
              />
              <ProductGrouped
                v-if="product.type === 'GroupedProduct'"
                :sku="product.sku"
              />
              <ProductBundle
                v-if="product.type === 'BundleProduct'"
                :sku="product.sku"
              />
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
