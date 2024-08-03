<script setup lang="ts">
import type { CartItem } from '@thunder/types';

const { item } = defineProps<{
  item: CartItem;
}>();

const { showError } = useUiErrorHandler();
const { showSuccess } = useUiNotification();
const { t } = useI18n();
const { removeItemAndUpdateCart, changeQuantityAndUpdateCart } = useCartItem();

const quantity = ref(item.quantity ?? 1);

async function removeItem(): Promise<void> {
  try {
    await removeItemAndUpdateCart(item.uid);
    showSuccess(t('messages.cart.itemRemoved'));
  } catch (error) {
    showError(error);
  }
}

async function updateItemQuantity(): Promise<void> {
  try {
    await changeQuantityAndUpdateCart(item.uid, quantity.value);
    showSuccess(t('messages.cart.quantityChanged'));
  } catch (error) {
    showError(error);
  }
}

watch(quantity, async () => {
  await updateItemQuantity();
});
</script>

<template>
  <div class="flex items-start justify-between border-b border-gray-200 py-4">
    <div class="flex items-center">
      <NuxtImg
        :src="item.product.image?.url ?? ''"
        :alt="item.product.image?.label ?? ''"
        class="mr-4 h-16 w-16 rounded-lg object-cover"
      />
      <div class="flex w-full flex-col">
        <BaseTypography class="mb-2">
          <span class="font-bold">{{ item.product.name }}</span>
        </BaseTypography>
        <BaseTypography variant="caption" class="mb-6">
          <span v-html="item.product.shortDescription" />
        </BaseTypography>
        <FormInputQty
          v-model="quantity"
          class="max-w-[100px] bg-gray-100 dark:bg-gray-800"
        />
      </div>
    </div>
    <div>
      <div class="flex flex-col items-end gap-4">
        <UButton
          color="primary"
          variant="ghost"
          size="lg"
          :title="$t('messages.shop.addToCart')"
          @click="removeItem"
        >
          <template #leading>
            <Icon
              name="solar:trash-bin-2-linear"
              class="text-xl hover:cursor-pointer"
            />
          </template>
        </UButton>
      </div>
    </div>
  </div>
</template>
