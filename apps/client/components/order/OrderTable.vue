<script lang="ts" setup>
const { fetchOrders } = useCustomerApi();

const { data: orders } = await fetchOrders({
  pageSize: 16,
  currentPage: 1
});
</script>

<template>
  <div>
    <table v-if="orders?.length" class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            class="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            {{ $t('messages.account.orderId') }}
          </th>
          <th
            class="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            {{ $t('messages.account.orderDate') }}
          </th>
          <th
            class="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            {{ $t('messages.account.totalAmount') }}
          </th>
          <th
            class="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            {{ $t('messages.account.actions') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <OrderTableRow
          v-for="order in orders"
          :key="order.number"
          :order="order"
        />
      </tbody>
    </table>
    <div v-else>
      {{ $t('messages.account.noOrders') }}
    </div>
  </div>
</template>
