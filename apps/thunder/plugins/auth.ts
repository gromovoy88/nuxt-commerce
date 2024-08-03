export default defineNuxtPlugin((nuxtApp): void => {
  const authToken = useCookie(useRuntimeConfig().public.authToken);

  nuxtApp.hook('apollo:auth', ({ token }) => {
    if (authToken.value) {
      token.value = authToken.value;
    }
  });
});
