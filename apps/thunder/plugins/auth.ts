export default defineNuxtPlugin((): void => {
  const authToken = useCookie(useRuntimeConfig().public.authToken);
  const { onLogin } = useAuth();

  if (authToken.value) {
    onLogin(authToken.value);
  }
});
