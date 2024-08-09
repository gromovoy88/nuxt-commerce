<script lang="ts" setup>
import type { Address } from '@thunder/types';

const { data: cart } = useCart();
const { setBillingAddress } = useCart();
const { billingAddress } = useCheckout();
const { getCartId } = useCartToken();
const { showError } = useUiErrorHandler();
const loading = ref(false);

const editAddress = ref(!billingAddress.value);
const useForShipping = ref(true);

const emit = defineEmits<{ 'set-billing-address': [] }>();

async function updateBillingAddress(address: Address) {
  loading.value = true;
  const data = await setBillingAddress(getCartId(), {
    address: {
      firstname: address.firstName,
      lastname: address.lastName,
      street: [...address.street],
      city: address.city,
      country_code: address.country,
      region: address.region,
      telephone: address.telephone,
      postcode: address.postcode
    },
    useForShipping: useForShipping.value
  });

  if (!data) {
    showError('Can`t update billing address');
    return;
  }

  cart.value = data;
  emit('set-billing-address');
  editAddress.value = false;
  loading.value = false;
}

function toggleEditAddress() {
  editAddress.value = !editAddress.value;
}

const formAddress = computed(() => ({
  firstName: billingAddress.value?.firstName ?? '',
  lastName: billingAddress.value?.lastName ?? '',
  street: billingAddress.value?.street ?? [],
  city: billingAddress.value?.city ?? '',
  country: billingAddress.value?.country ?? '',
  region: billingAddress.value?.region || '',
  telephone: billingAddress.value?.telephone || '',
  postcode: billingAddress.value?.postcode || ''
}));
</script>

<template>
  <div>
    <CheckoutAddressForm
      v-if="editAddress"
      :address="formAddress"
      :loading="loading"
      @submit-address="updateBillingAddress"
    />
    <CheckoutBillingAddressInfo v-else class="mb-4" />
    <UButton
      v-if="!editAddress"
      color="gray"
      variant="link"
      :padded="false"
      size="xl"
      :label="'Edit'"
      @click="toggleEditAddress"
    />
  </div>
</template>
