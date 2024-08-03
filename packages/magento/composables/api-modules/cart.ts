import type { Cart } from '@thunder/types';
import type {
  CartItemInput,
  FetchResult,
  SetBillingAddressInput
} from '../../types';
import { CreateEmptyCart } from '../../graphql/mutations/createEmptyCart';
import { GetCart } from '../../graphql/queries/getCart';
import { ApplyDiscountCoupon } from '../../graphql/mutations/applyDiscountCoupon';
import { SetBillingAddressOnCart } from '../../graphql/mutations/setBillingAddressOnCart';
import { SetGuestEmailOnCart } from '../../graphql/mutations/setGuestEmailOnCart';
import { SetPaymentMethodOnCart } from '../../graphql/mutations/setPaymentMethodOnCart';
import { SetShippingMethodsOnCart } from '../../graphql/mutations/setShippingMethodsOnCart';
import { AddProductsToCart } from '../../graphql/mutations/addProductsToCart';
import { RemoveItemFromCart } from '../../graphql/mutations/removeProductFromCart';
import { UpdateCartItems } from '../../graphql/mutations/updateCartItems';
import { MergeCarts } from '../../graphql/mutations/mergeCarts';

export function useCartApi() {
  async function createCartId(): Promise<FetchResult<string, Error>> {
    const { mutate, error } = useMutation(CreateEmptyCart);
    const result = await mutate();

    return {
      data: result?.data?.createEmptyCart ?? null,
      error: error.value
    };
  }

  async function fetchCart(cartId: string): Promise<FetchResult<Cart, Error>> {
    const { data, error } = await useAsyncQuery(GetCart, {
      cartId
    });

    return {
      data: mapCart(data.value.cart),
      error: error.value
    };
  }

  async function applyDiscountCoupon(
    cartId: string,
    couponCode: string
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(ApplyDiscountCoupon);
    const response = await mutate({
      cartId,
      couponCode
    });

    return {
      data: response?.data?.applyCouponToCart
        ? mapCart(response.data.applyCouponToCart.cart)
        : null,
      error: error.value
    };
  }

  async function setBillingAddress(
    input: SetBillingAddressInput
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(SetBillingAddressOnCart);
    const response = await mutate(input);

    return {
      data: response?.data?.setBillingAddressOnCart
        ? mapCart(response.data.setBillingAddressOnCart.cart)
        : null,
      error: error.value
    };
  }

  async function setEmailAddress(
    cartId: string,
    email: string
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(SetGuestEmailOnCart);
    const response = await mutate({
      cartId,
      email
    });

    return {
      data: response?.data?.setGuestEmailOnCart
        ? mapCart(response.data.setGuestEmailOnCart.cart)
        : null,
      error: error.value
    };
  }

  async function setPaymentMethod(
    cartId: string,
    paymentCode: string
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(SetPaymentMethodOnCart);
    const response = await mutate({
      cartId,
      paymentCode
    });

    return {
      data: response?.data?.setPaymentMethodOnCart
        ? mapCart(response.data.setPaymentMethodOnCart.cart)
        : null,
      error: error.value
    };
  }

  async function setShippingMethod(
    cartId: string,
    methodCode: string,
    carrierCode: string
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(SetShippingMethodsOnCart);
    const response = await mutate({
      cartId,
      methodCode,
      carrierCode
    });

    return {
      data: response?.data?.setShippingMethodsOnCart
        ? mapCart(response.data.setShippingMethodsOnCart.cart)
        : null,
      error: error.value
    };
  }

  async function removeItem(
    cartId: string,
    cartItemUid: string
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(RemoveItemFromCart);
    const response = await mutate({
      cartId,
      cartItemUid
    });

    return {
      data: response?.data?.removeItemFromCart
        ? mapCart(response.data.removeItemFromCart.cart)
        : null,
      error: error.value
    };
  }

  async function changeItemQuantity(
    cartId: string,
    itemUid: string,
    quantity: number
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(UpdateCartItems);
    const response = await mutate({
      cartId,
      cartItems: [{ cart_item_uid: itemUid, quantity }]
    });

    return {
      data: response?.data?.updateCartItems
        ? mapCart(response.data.updateCartItems.cart)
        : null,
      error: error.value
    };
  }

  async function addItem(
    cartId: string,
    cartItems: CartItemInput[]
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(AddProductsToCart);
    const response = await mutate({
      cartId,
      cartItems: cartItems.map(
        ({ sku, parentSku, selectedOptions, quantity }) => ({
          sku,
          parent_sku: parentSku,
          selected_options: selectedOptions,
          quantity
        })
      )
    });

    return {
      data: response?.data?.addProductsToCart
        ? mapCart(response.data.addProductsToCart.cart)
        : null,
      error: error.value
    };
  }

  async function mergeCarts(
    sourceCartId: string,
    destinationCartId: string
  ): Promise<FetchResult<Cart, Error>> {
    const { mutate, error } = useMutation(MergeCarts);
    const result = await mutate({ sourceCartId, destinationCartId });

    return {
      data: result?.data ? mapCart(result.data.mergeCarts) : null,
      error: error.value
    };
  }

  return {
    createCartId,
    fetchCart,
    mergeCarts,
    applyDiscountCoupon,
    setBillingAddress,
    setEmailAddress,
    setPaymentMethod,
    setShippingMethod,
    addItem,
    removeItem,
    changeItemQuantity
  };
}
