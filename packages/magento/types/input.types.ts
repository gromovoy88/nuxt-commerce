import type {
  CartAddressInput,
  CustomerAddressInput
} from '../graphql/generated/graphql';

export type PaginableInput = {
  pageSize?: number;
  currentPage?: number;
};

export type UpdateCustomerAddressInput = {
  id: number;
  address: CustomerAddressInput;
};

export type AddCustomerAddressInput = {
  address: CustomerAddressInput;
};

export type LoginUserInput = {
  email: string;
  password: string;
};

export type UpdateUserInput = {
  firstName: string;
  lastName: string;
};

export type RegisterAccountInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type FilterInput = {
  eq?: string;
  in?: Array<string>;
  from?: string;
  to?: string;
};

export type SortInput = {
  name?: string;
  position?: string;
  price?: string;
  relevance?: string;
};

export type FiltersInput = Record<string, FilterInput>;

export type ProductListInput = PaginableInput & {
  filters?: FiltersInput;
  sort?: SortInput;
  search?: string;
};

export type ProductReviewRatingInput = {
  id: string;
  value_id: string;
};

export type AddReviewInput = {
  nickname: string;
  summary: string;
  text: string;
  ratings: { ratingId: string; ratingValueId: string }[];
  sku: string;
};

export type SetBillingAddressInput = {
  cartId: string;
  billingAddress: CartAddressInput;
  useForShipping: boolean;
};

export type CartItemInput = {
  selectedOptions?: string[];
  parentSku?: string;
  quantity: number;
  sku: string;
};
