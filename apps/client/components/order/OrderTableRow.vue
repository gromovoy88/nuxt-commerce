<script lang="ts" setup>
import type { CustomerOrder } from '@thunder/types';

const { order } = defineProps<{
  order: CustomerOrder;
}>();

const showDetails = ref(false);
</script>

<template>
  <tr>
    <td class="whitespace-nowrap px-6 py-4">
      {{ order.number }}
    </td>
    <td class="whitespace-nowrap px-6 py-4">
      {{ order.orderDate }}
    </td>
    <td class="whitespace-nowrap px-6 py-4">
      <ProductPrice :price="order.total.grandTotal" />
    </td>
    <td class="whitespace-nowrap px-6 py-4">
      <UButton
        :label="$t('messages.account.orderDetails')"
        variant="link"
        :padded="false"
        @click="showDetails = true"
      />
      <UModal v-model="showDetails">
        <OrderDetails :order="order" />
      </UModal>
    </td>
  </tr>
</template>
