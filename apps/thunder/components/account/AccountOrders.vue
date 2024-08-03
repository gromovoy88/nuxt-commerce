<template>
  <div>
    <BaseCard class="min-h-[500px] lg:p-12">
      <BaseTypography variant="heading" class="mb-6">
        <h1>
          {{ $t('messages.account.orders') }}
        </h1>
      </BaseTypography>

      <OrderTable />
    </BaseCard>
  </div>
</template>
