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
  <CartProduct :product="item.product">
    <template #actions>
      <div class="flex flex-col items-end gap-4">
        <FormInputQty
          v-model="quantity"
          class="mx-auto min-w-[100px] bg-gray-100 dark:bg-gray-800"
        />
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
    </template>
  </CartProduct>
</template>
