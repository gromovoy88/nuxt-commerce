import { Notifications } from './useUiNotification';

export interface UseUiErrorHandler {
  showError: (error: any) => void;
}

export interface UseUiErrorHandlerOptions {
  transformError?: (error: any) => string;
}

export function useUiErrorHandler(
  options?: UseUiErrorHandlerOptions
): UseUiErrorHandler {
  const { t } = useI18n();
  const { showNotification } = useUiNotification();

  function defaultTransformError(error: any): string {
    if (error instanceof Error) {
      return error.message;
    }
    return t('messages.ui.errorDefault');
  }

  const transformError = options?.transformError || defaultTransformError;

  function showError(error: any): void {
    const errorMessage = transformError(error);

    showNotification(errorMessage, Notifications.error);
    console.error(`${t('messages.ui.handleError')}: `, error);
  }

  return {
    showError
  };
}
