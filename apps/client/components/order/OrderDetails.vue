<script lang="ts" setup>
import type { CustomerOrder } from '@thunder/types';

const { order } = defineProps<{
  order: CustomerOrder;
}>();
</script>

<template>
  <div class="flex flex-col p-4">
    <div class="mb-4">
      <BaseTypography variant="subtitle">
        <h2>
          {{ $t('messages.account.orderDetails') }}
        </h2>
      </BaseTypography>
    </div>
    <div class="mb-4">
      <BaseTypography variant="caption">
        {{ order.orderDate }}
      </BaseTypography>
      <BaseTypography>
        <div class="flex items-center">
          <span class="mr-2">{{ $t('messages.account.orderId') }}</span>
          <strong>{{ order.number }}</strong>
        </div>
        <div v-if="order.total.grandTotal" class="flex items-center">
          <span class="mr-2">{{ $t('messages.account.totalAmount') }}</span>
          <strong>
            <ProductPrice :price="order.total.grandTotal" />
          </strong>
        </div>
      </BaseTypography>
    </div>
    <div class="mb-4">
      <BaseTypography variant="subtitle">
        <h3>
          {{ $t('messages.account.orderItems') }}
          ({{ order.items?.length }})
        </h3>
      </BaseTypography>
    </div>
    <div>
      <ul>
        <li
          v-for="item in order.items"
          :key="item.productSku"
          class="flex items-center"
        >
          <OrderDetailsItem :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
