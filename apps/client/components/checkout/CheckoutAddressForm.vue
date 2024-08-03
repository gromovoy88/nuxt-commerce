<script lang="ts" setup>
import type { Address, Region } from '@thunder/types';

const props = defineProps<{
  address: Address;
  loading?: boolean;
}>();

const emit = defineEmits<{
  'submit-address': [value: Address];
}>();

const { t } = useI18n();
const { data: countries, updateCountries } = useCountry();
const { getRegions } = useRegions();

const regions: Ref<Region[]> = ref([]);
const formData = reactive<Address>({ ...props.address });
const errors = reactive({
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  country: '',
  region: '',
  postcode: '',
  telephone: ''
});
const validated = ref<boolean>(false);

await updateCountries();

function validateForm() {
  const message = t('messages.error.requiredField');

  errors.firstName = !formData.firstName ? message : '';
  errors.lastName = !formData.lastName ? message : '';
  errors.street = !formData.street[0] ? message : '';
  errors.city = !formData.city ? message : '';
  errors.country = !formData.country ? message : '';
  errors.postcode = !formData.postcode ? message : '';
  errors.telephone = !formData.telephone ? message : '';

  if (regions.value.length) {
    errors.region = regions.value.length && !formData.region ? message : '';
  }

  return !Object.values(errors).some((error) => error !== '');
}

function handleSubmitForm() {
  if (!validateForm()) {
    return;
  }

  emit('submit-address', formData);
  validated.value = true;
}

watch(formData, async () => {
  regions.value = await getRegions(formData.country);
});
</script>

<template>
  <form @submit.prevent="handleSubmitForm">
    <div class="mb-4 flex gap-4">
      <FormField
        :id="'fName'"
        v-model="formData.firstName"
        :error="validated ? errors.firstName : ''"
        :label="$t('messages.form.firstName')"
        :name="'fName'"
        :placeholder="$t('messages.form.firstName')"
        :type="'text'"
        class="w-1/2"
        :required="true"
      />
      <FormField
        :id="'lName'"
        v-model="formData.lastName"
        :error="validated ? errors.lastName : ''"
        :label="$t('messages.form.lastName')"
        :name="'lName'"
        :placeholder="$t('messages.form.lastName')"
        :type="'text'"
        class="w-1/2"
        :required="true"
      />
    </div>
    <FormField
      :id="'fPhone'"
      v-model="formData.telephone"
      :error="validated ? errors.telephone : ''"
      :label="$t('messages.form.phone')"
      :name="'fPhone'"
      :placeholder="$t('messages.form.phone')"
      :type="'text'"
      class="mb-4"
      :required="true"
    />
    <FormField
      :id="'fStreet'"
      v-model="formData.street[0]"
      :error="validated ? errors.street : ''"
      :label="$t('messages.form.address1')"
      :name="'fStreet'"
      :placeholder="$t('messages.form.address1')"
      :type="'text'"
      class="mb-4"
      :required="true"
    />
    <div class="mb-4 flex gap-4">
      <FormField
        :id="'fCity'"
        v-model="formData.city"
        :error="validated ? errors.city : ''"
        :label="$t('messages.form.city')"
        :name="'fCity'"
        :placeholder="$t('messages.form.city')"
        :type="'text'"
        class="w-2/3"
        :required="true"
      />
      <FormField
        :id="'fZip'"
        v-model="formData.postcode"
        :error="validated ? errors.postcode : ''"
        :label="$t('messages.form.zip')"
        :name="'fZip'"
        :placeholder="$t('messages.form.zip')"
        :type="'text'"
        :required="true"
        class="w-1/3"
      />
    </div>
    <FormSelect
      :id="'fCountry'"
      v-model="formData.country"
      :error="validated ? errors.country : ''"
      :label="$t('messages.form.country')"
      :name="'fCity'"
      :placeholder="$t('messages.form.selectCountry')"
      :options="countries"
      :option-label-key="'fullNameLocale'"
      :option-value-key="'twoLetterAbbreviation'"
      :required="true"
      class="mb-4"
    />
    <FormSelect
      v-if="regions.length"
      :id="'fRegion'"
      v-model="formData.region"
      :error="validated ? errors.region : ''"
      :label="$t('messages.form.region')"
      :name="'fRegion'"
      :placeholder="$t('messages.form.selectRegion')"
      :options="regions"
      :option-label-key="'name'"
      :option-value-key="'id'"
      :disabled="regions.length === 0"
      :required="true"
      class="mb-4"
    />
    <UButton
      color="primary"
      size="xl"
      :label="'Save'"
      type="submit"
      :loading="loading"
    />
  </form>
</template>
