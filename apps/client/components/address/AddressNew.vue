<script lang="ts" setup>
import { CountryCodeEnum } from '@thunder/magento/graphql/generated/graphql';
import type { Address } from '@thunder/types';

const localePath = useLocalePath();
const { t } = useI18n();
const { showSuccess } = useUiNotification();
const { showError } = useUiErrorHandler();
const { addCustomerAddress } = useCustomerApi();

const addressInput = ref<Address>({
  firstName: '',
  lastName: '',
  street: [],
  city: '',
  country: '',
  region: '',
  telephone: '',
  postcode: ''
});
const saveAsBilling = ref(false);
const saveAsShipping = ref(false);

function updateAddress(address: Address) {
  addressInput.value = address;
}

async function saveAddress() {
  const address = addressInput.value;
  const { data, error } = await addCustomerAddress({
    address: {
      firstname: address.firstName,
      lastname: address.lastName,
      street: address.street,
      city: address.city,
      country_code: address.country as CountryCodeEnum,
      region: {
        region_id: parseInt(address.region)
      },
      telephone: address.telephone,
      postcode: address.postcode,
      default_billing: saveAsBilling.value,
      default_shipping: saveAsShipping.value
    }
  });

  if (!data) {
    showError(error?.message);
    return;
  }

  showSuccess(t('messages.account.createAddressSuccess'));
  navigateTo({
    path: localePath(paths.accountAddressList)
  });
}
</script>

<template>
  <div>
    <BaseCard class="min-h-[500px] lg:p-12">
      <div class="mx-auto max-w-[500px]">
        <BaseTypography variant="heading" class="mb-6 lg:mb-8">
          <h1>
            {{ $t('messages.account.newAddress') }}
          </h1>
        </BaseTypography>
        <AddressForm
          :address="addressInput"
          class="mb-4"
          @submit-address="updateAddress"
        />
        <UCheckbox
          v-model="saveAsBilling"
          :label="$t('messages.account.defaultBilling')"
          class="mb-2"
        />
        <UCheckbox
          v-model="saveAsShipping"
          :label="$t('messages.account.defaultShipping')"
          class="mb-6"
        />
        <UButton
          color="primary"
          size="xl"
          :label="'Save address'"
          type="submit"
          @click="saveAddress"
        />
      </div>
    </BaseCard>
  </div>
</template>
