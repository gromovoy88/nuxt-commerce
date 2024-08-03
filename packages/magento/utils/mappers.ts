import {
  type Product,
  type Price,
  type Money,
  type SortField,
  type SortFieldOption,
  type Filter,
  type StoreConfig,
  type Cart,
  type CartItem,
  type Address,
  type CartShippingAddress,
  type Customer,
  type CustomerOrder,
  type Category,
  type CheckoutAgreement,
  type Page,
  type Country,
  type CustomerAddress,
  type MegaMenu,
  type Route,
  type Wishlist,
  type WishlistItem,
  type Review,
  type Rating,
  type ProductPage
} from '@thunder/types';
import type {
  MoneyFragment,
  ProductListItemFragment,
  ProductListPriceFragment,
  SortFieldOptionsFragment,
  SortFieldOptionFragment,
  ProductListFilterItemFragment,
  StoreConfigDataFragment,
  CartDataFragment,
  CartItemFragment,
  CartAddressFragment,
  CartShippingAddressFragment,
  CustomerDataFragment,
  CustomerOrdersFragment,
  CategoryItemFragment,
  CheckoutAgreementFragment,
  CmsPageItemFragment,
  CountryFragment,
  CustomerAddressItemFragment,
  MegaMenuParentFragment,
  GetRouteQuery,
  WishlistListFragment,
  WishlistItemFragment,
  ReviewsListItemFragment,
  ProductReviewRatingsMetadataQuery,
  ProductPageQuery
} from '../graphql/generated/graphql';

export function mapMoney(money: MoneyFragment | null): Money {
  return {
    value: money?.value ?? 0,
    currency: money?.currency ?? ''
  };
}

export function mapStoreConfig(
  storeConfig: StoreConfigDataFragment | null
): StoreConfig {
  return {
    defaultDisplayCurrencyCode:
      storeConfig?.default_display_currency_code ?? '',
    locale: storeConfig?.locale ?? '',
    secureBaseMediaUrl: storeConfig?.secure_base_media_url ?? '',
    storeCode: storeConfig?.store_code ?? '',
    storeGroupCode: storeConfig?.store_group_code ?? '',
    storeGroupName: storeConfig?.store_group_name ?? '',
    storeName: storeConfig?.store_name ?? '',
    storeSortOrder: storeConfig?.store_sort_order ?? 0,
    productUrlSuffix: storeConfig?.product_url_suffix ?? '',
    categoryUrlSuffix: storeConfig?.category_url_suffix ?? '',
    catalogDefaultSortBy: storeConfig?.catalog_default_sort_by ?? '',
    gridPerPage: storeConfig?.grid_per_page ?? 0,
    rootCategoryUid: storeConfig?.root_category_uid ?? '',
    baseCurrencyCode: storeConfig?.base_currency_code ?? ''
  };
}

export function mapCategory(category: CategoryItemFragment | null): Category {
  return {
    image: category?.image ?? '',
    name: category?.name ?? '',
    path: category?.path ?? '',
    urlKey: category?.url_path ?? '',
    uid: category?.uid ?? '',
    position: category?.position ?? 0,
    description: category?.description ?? '',
    breadcrumbs:
      category?.breadcrumbs?.map((breadcrumb) => ({
        categoryUid: breadcrumb?.category_uid ?? '',
        categoryName: breadcrumb?.category_name ?? '',
        categoryUrlPath: breadcrumb?.category_url_path ?? '',
        categoryLevel: breadcrumb?.category_level ?? 0
      })) ?? [],
    children:
      category?.children?.map((categoryChild) => ({
        image: categoryChild?.image ?? '',
        name: categoryChild?.name ?? '',
        path: categoryChild?.path ?? '',
        urlKey: categoryChild?.url_path ?? '',
        uid: categoryChild?.uid ?? '',
        position: categoryChild?.position ?? 0,
        description: categoryChild?.description ?? '',
        breadcrumbs:
          categoryChild?.breadcrumbs?.map((breadcrumb) => ({
            categoryUid: breadcrumb?.category_uid ?? '',
            categoryName: breadcrumb?.category_name ?? '',
            categoryUrlPath: breadcrumb?.category_url_path ?? '',
            categoryLevel: breadcrumb?.category_level ?? 0
          })) ?? []
      })) ?? []
  };
}

export function mapProductPrice(price: ProductListPriceFragment | null): Price {
  return {
    regularPrice: mapMoney(price?.regular_price ?? null),
    discount: {
      amountOff: price?.discount?.amount_off ?? 0,
      percentOff: price?.discount?.percent_off ?? 0
    },
    finalPrice: mapMoney(price?.final_price ?? null)
  };
}

export function mapProduct(product: ProductListItemFragment | null): Product {
  return {
    type: product?.__typename ?? '',
    name: product?.name ?? '',
    image: {
      url: product?.image?.url ?? '',
      label: product?.image?.label ?? ''
    },
    thumbnail: {
      url: product?.thumbnail?.url ?? '',
      label: product?.thumbnail?.label ?? ''
    },
    urlKey: product?.url_key ?? '',
    sku: product?.sku ?? '',
    shortDescription: product?.short_description?.html ?? '',
    description: product?.description?.html ?? '',
    priceRange: {
      minPrice: mapProductPrice(product?.price_range?.minimum_price ?? null)
    },
    ratingSummary: product?.rating_summary ?? 0,
    reviewCount: product?.review_count ?? 0,
    sale: !!product?.sale
  };
}

export function mapProductPage(productPage: ProductPageQuery): ProductPage {
  const product = productPage.products?.items?.[0] ?? null;
  return {
    ...mapProduct(product),
    mediaGallery:
      product?.media_gallery?.map((media) => ({
        url: media?.url ?? '',
        label: media?.label ?? ''
      })) ?? [],
    categories:
      product?.categories?.map((category) => mapCategory(category) ?? []) ?? []
  };
}

export function mapSortOption(
  sortItem: SortFieldOptionFragment
): SortFieldOption {
  return {
    label: sortItem.label ?? '',
    value: sortItem.value ?? ''
  };
}

export function mapSort(sort: SortFieldOptionsFragment | null): SortField {
  return {
    default: sort?.default ?? '',
    options: sort?.options?.map((option) => mapSortOption(option!)) ?? []
  };
}

export function mapFilter(
  aggregation: ProductListFilterItemFragment | null
): Filter {
  return {
    label: aggregation?.label ?? '',
    attributeCode: aggregation?.attribute_code ?? '',
    count: aggregation?.count ?? 0,
    options:
      aggregation?.options?.map((option) => ({
        label: option?.label ?? '',
        value: option?.value ?? '',
        count: option?.count ?? 0
      })) ?? []
  };
}

export function mapCartAddress(address: CartAddressFragment | null): Address {
  return {
    firstName: address?.firstname ?? '',
    lastName: address?.lastname ?? '',
    street: address?.street.map((street) => street!) ?? [],
    city: address?.city ?? '',
    country: address?.country.code ?? '',
    region: address?.region?.code ?? '',
    postcode: address?.postcode ?? '',
    telephone: address?.telephone ?? ''
  };
}

export function mapCartShippingAddress(
  address: CartShippingAddressFragment | null
): CartShippingAddress {
  return {
    availableShippingMethods:
      address?.available_shipping_methods?.map((method) => ({
        carrierCode: method?.carrier_code ?? '',
        carrierTitle: method?.carrier_title ?? '',
        methodCode: method?.method_code ?? '',
        methodTitle: method?.method_title ?? '',
        amount: mapMoney(method?.amount ?? null),
        available: method?.available ?? false
      })) ?? [],
    selectedShippingMethod: {
      carrierCode: address?.selected_shipping_method?.carrier_code ?? '',
      carrierTitle: address?.selected_shipping_method?.carrier_title ?? '',
      methodCode: address?.selected_shipping_method?.method_code ?? '',
      methodTitle: address?.selected_shipping_method?.method_title ?? '',
      amount: mapMoney(address?.selected_shipping_method?.amount ?? null)
    }
  };
}

export function mapCartItem(cartItem: CartItemFragment | null): CartItem {
  return {
    uid: cartItem?.uid ?? '',
    quantity: cartItem?.quantity ?? 0,
    product: mapProduct(cartItem?.product ?? null),
    prices: {
      price: mapMoney(cartItem?.prices?.price ?? null)
    }
  };
}

export function mapCart(cart: CartDataFragment | null): Cart {
  return {
    email: cart?.email ?? '',
    id: cart?.id ?? '',
    isVirtual: cart?.is_virtual ?? false,
    items: cart?.items?.map((item) => mapCartItem(item)) ?? [],
    prices: {
      subtotal: mapMoney(cart?.prices?.subtotal_including_tax ?? null),
      grandTotal: mapMoney(cart?.prices?.grand_total ?? null),
      discount:
        cart?.prices?.discounts?.map((discount) => ({
          amount: mapMoney(discount?.amount ?? null),
          label: discount?.label ?? ''
        })) ?? []
    },
    totalQuantity: cart?.total_quantity ?? 0,
    billingAddress: cart?.billing_address
      ? mapCartAddress(cart?.billing_address)
      : null,
    shippingAddresses:
      cart?.shipping_addresses.map((address) =>
        mapCartShippingAddress(address ?? null)
      ) ?? [],
    selectedPaymentMethod: cart?.selected_payment_method
      ? {
          code: cart.selected_payment_method.code ?? '',
          title: cart.selected_payment_method.title ?? ''
        }
      : null,
    availablePaymentMethods:
      cart?.available_payment_methods?.map((paymentMethod) => ({
        code: paymentMethod?.code ?? '',
        title: paymentMethod?.title ?? ''
      })) ?? []
  };
}

export function mapCustomer(customer: CustomerDataFragment | null): Customer {
  return {
    defaultBilling: customer?.default_billing ?? '',
    defaultShipping: customer?.default_shipping ?? '',
    dob: customer?.dob ?? '',
    email: customer?.email ?? '',
    firstName: customer?.firstname ?? '',
    gender: customer?.lastname ?? '',
    groupId: customer?.group_id ?? 0,
    id: customer?.id ?? 0,
    isSubscribed: customer?.is_subscribed ?? false,
    lastName: customer?.lastname ?? '',
    middlename: customer?.middlename ?? '',
    prefix: customer?.prefix ?? '',
    suffix: customer?.suffix ?? '',
    taxvat: customer?.taxvat ?? ''
  };
}

export function mapCustomerOrders(
  orders: CustomerOrdersFragment | null
): CustomerOrder[] {
  return (
    orders?.orders?.items.map((order) => ({
      number: order?.number ?? '',
      orderDate: order?.order_date ?? '',
      shipments:
        order?.shipments?.map((shipment) => ({
          trackingNumber: shipment?.tracking?.[0]?.number ?? ''
        })) ?? [],
      total: {
        grandTotal: mapMoney(order?.total?.grand_total ?? null)
      },
      items:
        order?.items?.map((item) => ({
          productName: item?.product_name ?? '',
          productSku: item?.product_sku ?? '',
          productUrlKey: item?.product_url_key ?? '',
          productSalePrice: mapMoney(item?.product_sale_price ?? null),
          quantityOrdered: item?.quantity_ordered ?? 0,
          quantityShipped: item?.quantity_shipped ?? 0,
          quantityCanceled: item?.quantity_canceled ?? 0,
          quantityInvoiced: item?.quantity_invoiced ?? 0,
          quantityRefunded: item?.quantity_refunded ?? 0,
          quantityReturned: item?.quantity_returned ?? 0
        })) ?? []
    })) ?? []
  );
}

export function mapCheckoutAgreement(
  agreement: CheckoutAgreementFragment | null
): CheckoutAgreement {
  return {
    agreementId: agreement?.agreement_id ?? 0,
    checkboxText: agreement?.checkbox_text ?? '',
    content: agreement?.content ?? '',
    mode: agreement?.mode ?? '',
    name: agreement?.name ?? ''
  };
}

export function mapPage(page: CmsPageItemFragment | null): Page {
  return {
    id: page?.identifier ?? '',
    urlKey: page?.url_key ?? '',
    content: page?.content ?? '',
    contentHeading: page?.content_heading ?? '',
    title: page?.title ?? '',
    pageLayout: page?.page_layout ?? '',
    metaTitle: page?.meta_title ?? '',
    metaKeywords: page?.meta_keywords ?? '',
    metaDescription: page?.meta_description ?? ''
  };
}

export function mapCountry(country: CountryFragment | null): Country {
  return {
    fullNameLocale: country?.full_name_locale ?? '',
    twoLetterAbbreviation: country?.two_letter_abbreviation ?? '',
    threeLetterAbbreviation: country?.three_letter_abbreviation ?? '',
    availableRegions:
      country?.available_regions?.map((region) => ({
        code: region?.code ?? '',
        id: region?.id ?? 0,
        name: region?.name ?? ''
      })) ?? []
  };
}

export function mapCustomerAddress(
  address: CustomerAddressItemFragment | null
): CustomerAddress {
  return {
    id: address?.id ?? 0,
    firstName: address?.firstname ?? '',
    lastName: address?.lastname ?? '',
    street: address?.street?.map((street) => street!) ?? [],
    city: address?.city ?? '',
    country: address?.country_code ?? '',
    region: `${address?.region_id}` ?? '',
    postcode: address?.postcode ?? '',
    telephone: address?.telephone ?? '',
    defaultBilling: address?.default_billing ?? false,
    defaultShipping: address?.default_shipping ?? false,
    company: address?.company ?? ''
  };
}

export function mapMegaMenu(menu: MegaMenuParentFragment | null): MegaMenu {
  return {
    name: menu?.name ?? '',
    productCount: menu?.product_count ?? 0,
    uid: menu?.uid ?? '',
    includeInMenu: !!menu?.include_in_menu,
    level: 0,
    position: 0,
    urlPath: '',
    children: menu?.children?.map((item) => ({
      name: item?.name ?? '',
      productCount: item?.product_count ?? 0,
      uid: item?.uid ?? '',
      includeInMenu: !!item?.include_in_menu,
      level: item?.level ?? 1,
      position: item?.position ?? 0,
      urlPath: item?.url_path ?? '',
      children: item?.children?.map((childItem) => ({
        name: childItem?.name ?? '',
        productCount: childItem?.product_count ?? 0,
        uid: childItem?.uid ?? '',
        includeInMenu: true,
        level: childItem?.level ?? 1,
        position: childItem?.position ?? 0,
        urlPath: childItem?.url_path ?? ''
      }))
    }))
  };
}

export function mapRouteType({ route }: GetRouteQuery): Route | null {
  const data = {
    relativeUrl: route?.relative_url ?? '',
    redirectCode: route?.redirect_code ?? 0
  };

  if (!route) return null;

  if (isTypename(route, ['CmsPage'])) {
    return {
      ...data,
      type: 'Page',
      urlKey: route?.url_key ?? '',
      id: route.identifier ?? ''
    };
  }

  if (
    isTypename(route, [
      'BundleProduct',
      'SimpleProduct',
      'ConfigurableProduct',
      'DownloadableProduct',
      'GroupedProduct',
      'VirtualProduct'
    ])
  ) {
    return {
      ...data,
      type: 'Product',
      urlKey: route?.url_key ?? '',
      name: route?.name ?? ''
    };
  }

  if (isTypename(route, ['CategoryTree'])) {
    return {
      ...data,
      type: 'Category',
      urlKey: route?.url_key ?? '',
      name: route?.name ?? ''
    };
  }

  return null;
}

export function mapWishlistItem(
  wishlistItem: WishlistItemFragment | null
): WishlistItem {
  return {
    id: wishlistItem?.id ?? '',
    product: mapProduct(wishlistItem?.product ?? null)
  };
}

export function mapWishlist(wishlit: WishlistListFragment | null): Wishlist {
  return {
    id: wishlit?.id ?? '',
    itemsCount: wishlit?.items_count ?? 0,
    items:
      wishlit?.items_v2?.items.map((item) => mapWishlistItem(item ?? null)) ??
      []
  };
}

export function mapReview(review: ReviewsListItemFragment | null): Review {
  return {
    averageRating: review?.average_rating ?? 0,
    summary: review?.summary ?? '',
    text: review?.text ?? '',
    nickname: review?.nickname ?? '',
    createdAt: review?.created_at ?? ''
  };
}

export function mapRating(rating: ProductReviewRatingsMetadataQuery): Rating[] {
  return (
    rating.productReviewRatingsMetadata.items.map((rating) => ({
      id: rating?.id ?? '',
      name: rating?.name ?? '',
      values:
        rating?.values?.map((value) => ({
          id: value?.value_id ?? '',
          value: value?.value ?? ''
        })) ?? []
    })) ?? []
  );
}
