export function redirectOrNotFound(url: string): void {
  const localePath = useLocalePath();
  try {
    // Here could be implemented logic to check few possible routes with prefixes for category or product
    navigateTo(localePath(url), { redirectCode: 301 });
  } catch (error) {
    if (error instanceof Error) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }
  }
}
