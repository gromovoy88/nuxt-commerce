export default defineNuxtPlugin(async (): Promise<void> => {
  const config = useRuntimeConfig().public;
  const cartToken = useCookie(config.cartToken);
  const customerToken = useCookie(config.authToken);
  const storeToken = useCookie(config.storeToken);
  const isReloaded = useCookie(config.reloadedToken);
  const storeConfig = useStoreConfig();
  const customer = useCustomer();
  const cart = useCart();

  try {
    if (!storeToken.value) {
      const stores = await storeConfig.fetchStoresConfig();
      storeToken.value = stores[0].storeCode;
    }

    const { data: storeConfigData } = await useAsyncData(
      'store-config-data',
      () => storeConfig.fetchStoreConfig(storeToken.value as string)
    );

    storeConfig.data.value = storeConfigData.value;

    if (!cartToken.value) {
      const cartData = await cart.createEmptyCart();
      cartToken.value = cartData.id;
    }

    const { data: cartData } = await useAsyncData('cart-data', () =>
      cart.fetchCart(cartToken.value as string)
    );

    cart.data.value = cartData.value;

    if (customerToken.value) {
      const { data: customerData } = await useAsyncData('customer-data', () =>
        customer.fetchCustomer()
      );
      customer.data.value = customerData.value;
    }
  } catch (error) {
    if (import.meta.client) {
      if (!isReloaded.value) {
        clearAllCookies();
        window.location.reload();
        isReloaded.value = '1';
      }
    }
  }
});
