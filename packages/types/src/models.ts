import {Maybe, Tree} from "./common";

export type Money = {
  currency: string;
  value: number;
};

export type Image = {
  url: string;
  label: string;
};

export type StoreConfig = {
  defaultDisplayCurrencyCode: string;
  locale: string;
  secureBaseMediaUrl: string;
  storeCode: string;
  storeGroupCode: string;
  storeGroupName: string;
  storeName: string;
  storeSortOrder: number;
  productUrlSuffix: string;
  categoryUrlSuffix: string;
  catalogDefaultSortBy: string;
  gridPerPage: number;
  rootCategoryUid: string;
  baseCurrencyCode: string;
};

export type Region = {
  code: string;
  id: number;
  name: string;
};

export type Country = {
  fullNameLocale: string;
  twoLetterAbbreviation: string;
  threeLetterAbbreviation: string;
  availableRegions: Region[];
};

export type Breadcrumb = {
  title: string;
  link?: string;
};

export type Discount = {
  amountOff: number;
  percentOff: number;
};

export type CategoryBreadcrumb = {
  categoryUid: string;
  categoryName: string;
  categoryUrlPath: string;
  categoryLevel: number;
};

export type CategoryItem = {
  image: string;
  name: string;
  path: string;
  urlKey: string;
  uid: string;
  position: number;
  description: string;
  breadcrumbs: CategoryBreadcrumb[];
}

export type Category = Tree<CategoryItem>;

export type Price = {
  regularPrice?: Money;
  discount?: Discount;
  finalPrice: Money;
};

export type PriceRange = {
  minPrice: Price;
  maxPrice?: Price;
};

export type Product = {
  type: string;
  name: string;
  image: Image;
  thumbnail: Image;
  urlKey: string;
  sku: string;
  shortDescription: string;
  description: string;
  priceRange: PriceRange;
  ratingSummary: number;
  reviewCount: number;
  sale: boolean;
};

export type ProductPage = Product & {
  mediaGallery: Image[];
  categories: Category[];
};

export type FilterOption = {
  label: string;
  value: string;
  count: number;
};

export type Filter = {
  label: string;
  attributeCode: string;
  count: number;
  options: FilterOption[];
};

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};

export type SortFieldOption = {
  label: string;
  value: string;
};

export type SortField = {
  default: string;
  options: SortFieldOption[];
};

export type ProductList = {
  items: Product[];
  filters: Filter[];
  sort: SortField;
  pageInfo: PageInfo;
  totalCount: number;
}

export type Address = {
  firstName: string;
  lastName: string;
  street: string[];
  city: string;
  country: string;
  region: string;
  postcode: string;
  telephone: string;
};

export type PaymentMethod = {
  code: string;
  title: string;
};

export type ShippingMethod = {
  carrierCode: string;
  carrierTitle: string;
  methodCode: string;
  methodTitle: string;
  amount: Money;
};

export type AvailableShippingMethod = ShippingMethod & {
  available: boolean;
}

export type CartBillingAddress = Address;

export type CartShippingAddress = {
  availableShippingMethods: AvailableShippingMethod[];
  selectedShippingMethod: ShippingMethod;
};

export type CartItemPrices = {
  price: Money;
};

export type CartItem = {
  uid: string;
  quantity: number;
  product: Product;
  prices: CartItemPrices;
};

export type CartDiscount = {
  amount: Money;
  label: string;
};

export type CartPrices = {
  subtotal: Money;
  grandTotal: Money;
  discount: CartDiscount[];
};

export type Cart = {
  email: string;
  id: string;
  isVirtual: boolean;
  items: CartItem[];
  prices: CartPrices;
  totalQuantity: number;
  billingAddress: Maybe<CartBillingAddress>;
  shippingAddresses: CartShippingAddress[];
  selectedPaymentMethod: Maybe<PaymentMethod>;
  availablePaymentMethods: PaymentMethod[];
};

export type CustomerAddress = Address & {
  id: number;
  company: string;
  defaultBilling: boolean;
  defaultShipping: boolean;
};

export type Customer = {
  defaultBilling: string;
  defaultShipping: string;
  dob: string;
  email: string;
  firstName: string;
  gender: string;
  groupId: number;
  id: number;
  isSubscribed: boolean;
  lastName: string;
  middlename: string;
  prefix: string;
  suffix: string;
  taxvat: string;
};

export type CustomerOrderItem = {
  productName: string;
  productSku: string;
  productUrlKey: string;
  productSalePrice: Money;
  quantityOrdered: number;
  quantityShipped: number;
  quantityCanceled: number;
  quantityInvoiced: number;
  quantityRefunded: number;
  quantityReturned: number;
}

export type CustomerOrderShipment = {
  trackingNumber: string;
}

export type CustomerOrderTotal = {
  grandTotal: Money;
}

export type CustomerOrder = {
  number: string;
  orderDate: string;
  shipments: CustomerOrderShipment[];
  total: CustomerOrderTotal;
  items: CustomerOrderItem[];
}

export type CheckoutAgreement = {
  agreementId: number;
  checkboxText: string;
  content: string;
  mode: string;
  name: string;
};

export type CheckoutOrder = {
  number: string;
};

export type Page = {
  id: string;
  urlKey: string;
  content: string;
  contentHeading: string;
  title: string;
  pageLayout: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
};

export type MegaMenuItem = {
  name: string;
  productCount: number;
  uid: string;
  includeInMenu: boolean;
  position: number;
  level: number;
  urlPath: string;
}

export type MegaMenu = Tree<MegaMenuItem>;

export type Routes = 'Category' | 'Product' | 'Page';

export type RouteData<T extends string> = {
  type: T,
  redirectCode: number;
  relativeUrl: string;
}

export type RoutePage = RouteData<'Page'> & Pick<Page, 'id' | 'urlKey'>;

export type RouteProduct = RouteData<'Product'> & Pick<Product, 'name' | 'urlKey'>;

export type RouteCategory = RouteData<'Category'> & Pick<CategoryItem, 'name' | 'urlKey'>;

export type Route = RouteCategory | RoutePage | RouteProduct;

export type WishlistItem = {
  id: string;
  product: Product;
};

export type Wishlist = {
  id: string;
  itemsCount: number;
  items: WishlistItem[];
}

export type Review = {
  averageRating: number;
  summary: string;
  text: string;
  nickname: string;
  createdAt: string;
}

export type RatingValue = {
  id: string;
  value: string;
}

export type Rating = {
  id: string;
  name: string;
  values: RatingValue[];
}
