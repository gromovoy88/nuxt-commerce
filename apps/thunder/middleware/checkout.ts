export default defineNuxtRouteMiddleware((to) => {
  const localePath = useLocalePath({ route: to });
  const { data } = useCart();

  if (!data.value?.items?.length) {
    return navigateTo({ path: localePath(paths.home) });
  }
});
