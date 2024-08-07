import { ApolloLink, from, ApolloClient } from '@apollo/client/core';

export default defineNuxtPlugin(async (): Promise<void> => {
  const config = useRuntimeConfig().public;
  const cartToken = useCookie(config.cartToken);
  const authToken = useCookie(config.authToken);
  const storeToken = useCookie(config.storeToken);
  const isReloaded = useCookie(config.reloadedToken);
  const { updateStoreConfig, data: storeConfig } = useStoreConfig();
  const { updateCustomer } = useCustomer();
  const { createEmptyCart, updateCart, data: cartData } = useCart();
  const { clients } = useApollo();
  const defaultClient: ApolloClient<any> = (clients as any).default;

  if (storeToken.value) {
    const storeCodeLink = new ApolloLink((operation, forward) => {
      if (storeToken.value) {
        operation.setContext(() => {
          return {
            headers: {
              store: storeToken.value
            }
          };
        });
      }
      return forward(operation);
    });

    defaultClient.setLink(from([storeCodeLink, defaultClient.link]));
  }

  try {
    await updateStoreConfig();

    storeToken.value = storeConfig.value?.storeCode;

    if (!cartToken.value) {
      await createEmptyCart();
    } else {
      await updateCart(cartToken.value);
    }

    cartToken.value = cartData.value?.id;

    if (authToken.value) {
      await updateCustomer();
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
