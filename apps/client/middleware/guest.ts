export default defineNuxtRouteMiddleware((to) => {
  const localePath = useLocalePath({ route: to });
  const { data } = useCustomer();

  if (data.value) {
    if (process.server) {
      return navigateTo({ path: localePath(paths.account) });
    }

    return abortNavigation();
  }
});
