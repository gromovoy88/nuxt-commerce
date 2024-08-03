export default defineNuxtRouteMiddleware((to) => {
  const localePath = useLocalePath({ route: to });
  const { data } = useCustomer();

  if (!data.value) {
    return navigateTo({ path: localePath(paths.authLogin) });
  }
});
