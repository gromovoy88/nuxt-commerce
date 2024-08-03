import type { CustomerOrder, Customer, CustomerAddress } from '@thunder/types';
import { GetAccountOrders } from '../../graphql/queries/getAccountOrders';
import type {
  FetchResult,
  PaginableInput,
  LoginUserInput,
  UpdateUserInput,
  RegisterAccountInput,
  AddCustomerAddressInput,
  UpdateCustomerAddressInput,
  UpdateCustomerAddressResponse,
  LoginCustomerResponse,
  CustomerCartIdResponse
} from '../../types';
import { GetCustomerData } from '../../graphql/queries/getCustomerData';
import { LoginCustomer } from '../../graphql/mutations/loginCustomer';
import { UpdateCustomer } from '../../graphql/mutations/updateCustomer';
import { ChangePassword } from '../../graphql/mutations/changePassword';
import { CreateCustomer } from '../../graphql/mutations/createCustomer';
import { AddCustomerAddress } from '../../graphql/mutations/addCustomerAddress';
import { UpdateCustomerAddress } from '../../graphql/mutations/updateCustomerAddress';
import { GetCustomerAddresses } from '../../graphql/queries/getCustomerAddresses';
import { GetCustomerCart } from '../../graphql/queries/getCustomerCart';

export function useCustomerApi() {
  async function loginCustomer(
    input: LoginUserInput
  ): Promise<FetchResult<LoginCustomerResponse, Error>> {
    const { mutate, error } = useMutation(LoginCustomer);
    const response = await mutate(input);

    return {
      data: response?.data?.generateCustomerToken?.token
        ? { token: response.data.generateCustomerToken.token }
        : null,
      error: error.value
    };
  }

  async function fetchCustomer(): Promise<FetchResult<Customer, Error>> {
    const { data, error } = await useAsyncQuery(GetCustomerData);

    return {
      data: mapCustomer(data.value.customer),
      error: error.value
    };
  }

  async function updateCustomer(
    input: UpdateUserInput
  ): Promise<FetchResult<Customer, Error>> {
    const { mutate, error } = useMutation(UpdateCustomer);
    const response = await mutate(input);

    return {
      data: response?.data?.updateCustomerV2
        ? mapCustomer(response.data.updateCustomerV2.customer)
        : null,
      error: error.value
    };
  }

  async function changeCustomerPassword(
    currentPassword: string,
    newPassword: string
  ): Promise<FetchResult<Customer, Error>> {
    const { mutate, error } = useMutation(ChangePassword);
    const response = await mutate({
      currentPassword,
      newPassword
    });

    return {
      data: response?.data
        ? mapCustomer(response.data.changeCustomerPassword)
        : null,
      error: error.value
    };
  }

  async function registerCustomer(
    input: RegisterAccountInput
  ): Promise<FetchResult<Customer, Error>> {
    const { mutate, error } = useMutation(CreateCustomer);
    const response = await mutate({
      firstname: input.firstName,
      lastname: input.lastName,
      email: input.email,
      password: input.password
    });

    return {
      data: response?.data?.createCustomer
        ? mapCustomer(response.data.createCustomer.customer)
        : null,
      error: error.value
    };
  }

  async function fetchOrders({
    pageSize,
    currentPage
  }: PaginableInput): Promise<FetchResult<CustomerOrder[], Error>> {
    const { data, error } = await useAsyncQuery(GetAccountOrders, {
      pageSize,
      currentPage
    });

    return {
      data: mapCustomerOrders(data.value.customer),
      error: error.value
    };
  }

  async function fetchCustomerAddresses(): Promise<
    FetchResult<CustomerAddress[], Error>
  > {
    const { data, error } = await useAsyncQuery(GetCustomerAddresses);

    return {
      data:
        data.value?.customer?.addresses?.map((address) =>
          mapCustomerAddress(address)
        ) ?? null,
      error: error.value
    };
  }

  async function updateCustomerAddress(
    input: UpdateCustomerAddressInput
  ): Promise<FetchResult<UpdateCustomerAddressResponse, Error>> {
    const { mutate, error } = useMutation(UpdateCustomerAddress);
    const response = await mutate(input);

    return {
      data: response?.data?.updateCustomerAddress?.id
        ? {
            id: response.data.updateCustomerAddress.id
          }
        : null,
      error: error.value
    };
  }

  async function addCustomerAddress(
    input: AddCustomerAddressInput
  ): Promise<FetchResult<CustomerAddress, Error>> {
    const { mutate, error } = useMutation(AddCustomerAddress);
    const response = await mutate(input);

    return {
      data: response?.data
        ? mapCustomerAddress(response.data.createCustomerAddress)
        : null,
      error: error.value
    };
  }

  async function fetchCustomerCartId(): Promise<
    FetchResult<CustomerCartIdResponse, Error>
  > {
    const { data, error } = await useAsyncQuery(GetCustomerCart);

    return {
      data: { id: data.value.customerCart.id },
      error: error.value
    };
  }

  return {
    loginCustomer,
    fetchCustomer,
    updateCustomer,
    changeCustomerPassword,
    registerCustomer,
    fetchOrders,
    fetchCustomerAddresses,
    updateCustomerAddress,
    addCustomerAddress,
    fetchCustomerCartId
  };
}
