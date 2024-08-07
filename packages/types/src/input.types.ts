export type PaginableInput = {
  pageSize?: number;
  currentPage?: number;
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

export type CartItemInput = {
  selectedOptions?: string[];
  parentSku?: string;
  quantity: number;
  sku: string;
};
