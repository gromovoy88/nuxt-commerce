export function handleError(error: unknown, customErrorMessage?: string): void {
  if (customErrorMessage) {
    console.error(customErrorMessage);
  } else {
    console.error(
      'An error occurred:',
      error instanceof Error ? error.message : error
    );
  }
}
