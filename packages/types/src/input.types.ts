export type PaginableInput = {
  pageSize?: number;
  currentPage?: number;
};

export type LoginUserInput = {
  email: string;
  password: string;
};

export type CartAddressInput = {
  city: string;
  company?: string;
  country_code: string;
  firstname: string;
  lastname: string;
  postcode?: string;
  region?: string;
  region_id?: number;
  saveInAddressBook?: boolean;
  street: (string | undefined)[];
  telephone?: string;
  vatId?: string;
};

export type SetBillingAddressInput = {
  useForShipping: boolean;
  address: CartAddressInput;
}

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
};

export type CartItemInput = {
  selectedOptions?: string[];
  parentSku?: string;
  quantity: number;
  sku: string;
};

export type CustomerAddressInput = {
  city?: string;
  company?: string;
  countryCode?: string;
  customAttributes?: Record<string, any>; // Deprecated: Custom attributes should not be put into container
  defaultBilling?: boolean;
  defaultShipping?: boolean;
  fax?: string;
  firstname?: string;
  lastname?: string;
  postcode?: string;
  prefix?: string;
  regionId?: number;
  street?: Array<string | undefined>;
  suffix?: string;
  telephone?: string;
  vatId?: string;
};
