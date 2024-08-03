export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('apollo:error', (error) => {
    handleError(error.response?.errors);
  });
});
