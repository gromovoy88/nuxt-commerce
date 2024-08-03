<script lang="ts" setup>
const props = defineProps<{
  name: string;
  sku: string;
}>();

const { addProductToWishlist } = useWishlistApi();
const { showSuccess } = useUiNotification();
const { t } = useI18n();
const { showError } = useUiErrorHandler();

async function addToWishlist() {
  if (props.sku && props.name) {
    const { data, error } = await addProductToWishlist(props.sku);

    if (!data) {
      showError(error?.message);
      return;
    }

    showSuccess(t('messages.wishlist.successAdded').replace('%1', props.name));
  }
}
</script>

<template>
  <div>
    <UButton
      color="primary"
      variant="ghost"
      size="lg"
      :title="$t('messages.shop.addToWishlist')"
      @click.stop.prevent="addToWishlist"
    >
      <template #leading>
        <Icon
          name="solar:heart-linear"
          class="text-2xl"
          :title="$t('messages.shop.addToWishlist')"
        />
      </template>
    </UButton>
  </div>
</template>
