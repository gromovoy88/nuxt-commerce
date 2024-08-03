<script lang="ts" setup>
const { fetchAgreements } = useCheckoutApi();
const { data: agreements } = await fetchAgreements();
</script>

<template>
  <div v-if="agreements?.length">
    <div
      v-for="agreement in agreements"
      :key="agreement.agreementId"
      class="mb-4 last:mb-0"
    >
      <UCheckbox
        v-if="agreement.mode === 'MANUAL'"
        :name="agreement.name"
        :label="agreement.checkboxText"
        :required="agreement.mode === 'MANUAL'"
        class="mb-2"
      />
      <BaseTypography variant="caption">
        {{ agreement.content }}
      </BaseTypography>
    </div>
  </div>
</template>
