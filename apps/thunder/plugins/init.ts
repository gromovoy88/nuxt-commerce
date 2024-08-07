export default defineNuxtPlugin(async (): Promise<void> => {
  const config = useRuntimeConfig().public;
  const cartToken = useCookie(config.cartToken);
  const authToken = useCookie(config.authToken);
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

    await storeConfig.updateStoreConfig(storeToken.value);

    if (!cartToken.value) {
      const cartData = await cart.createEmptyCart();
      cartToken.value = cartData.id;
    }

    await cart.updateCart(cartToken.value);

    if (authToken.value) {
      await customer.updateCustomer();
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
