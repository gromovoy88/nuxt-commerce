<script lang="ts" setup>
import { CountryCodeEnum } from '@thunder/magento/graphql/generated/graphql';
import type { Address } from '@thunder/types';

const route = useRoute();
const { t } = useI18n();
const { showSuccess } = useUiNotification();
const { showError } = useUiErrorHandler();
const { fetchCustomerAddresses, updateCustomerAddress } = useCustomerApi();
const localePath = useLocalePath();
const addressId = parseInt(`${route.params.id}`);

const { data: addresses } = await fetchCustomerAddresses();

const currentAddress =
  addresses?.find((address) => address.id === addressId) ?? null;

const addressInput = ref<Address>({
  firstName: currentAddress?.firstName ?? '',
  lastName: currentAddress?.lastName ?? '',
  street: [...(currentAddress?.street ?? [])],
  city: currentAddress?.city ?? '',
  country: currentAddress?.country ?? '',
  region: currentAddress?.region ?? '',
  telephone: currentAddress?.telephone ?? '',
  postcode: currentAddress?.postcode ?? ''
});
const saveAsBilling = ref(currentAddress?.defaultBilling ?? false);
const saveAsShipping = ref(currentAddress?.defaultShipping ?? false);

function navigateToAddressesList() {
  navigateTo(localePath(paths.accountAddressList));
}

function updateAddress(address: Address) {
  addressInput.value = address;
}

async function saveAddress() {
  const address = addressInput.value;
  const { data, error } = await updateCustomerAddress({
    id: addressId,
    address: {
      firstname: address.firstName,
      lastname: address.lastName,
      street: [...address.street],
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

  if (!data?.id) {
    showError(error?.message);
    return;
  }

  showSuccess(t('messages.customerAddress.editedSuccesfully'));
  navigateToAddressesList();
}
</script>
<template>
  <div>
    <BaseCard class="min-h-[500px] lg:p-12">
      <div class="mx-auto max-w-[500px]">
        <BaseTypography variant="heading" class="mb-6 lg:mb-8">
          <h1>
            {{ $t('messages.customerAddress.edit') }}
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
        <div class="flex gap-4">
          <UButton
            color="primary"
            size="xl"
            :label="'Save address'"
            type="submit"
            @click="saveAddress"
          />
          <UButton
            color="red"
            size="xl"
            :label="'Cancel'"
            variant="link"
            @click="navigateToAddressesList"
          />
        </div>
      </div>
    </BaseCard>
  </div>
</template>
