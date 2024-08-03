export enum Notifications {
  warning = 'warning',
  success = 'success',
  error = 'error'
}

export interface UseUiNotification {
  showNotification: (
    message: string | string[],
    variant?: Notifications
  ) => void;
  showInfo: (message: string) => void;
  showWarning: (message: string) => void;
  showError: (message: string) => void;
  showSuccess: (message: string) => void;
}

export function useUiNotification(): UseUiNotification {
  const { t } = useI18n();
  const toast = useToast();

  function showInfo(message: string): void {
    toast.add({
      title: '',
      description: message,
      color: 'gray'
    });
  }

  function showWarning(message: string): void {
    toast.add({
      title: t('messages.general.notificationWarning'),
      description: message,
      icon: 'i-solar-shield-warning-linear',
      color: 'yellow'
    });
  }

  function showSuccess(message: string): void {
    toast.add({
      title: t('messages.general.notificationSuccess'),
      description: message,
      icon: 'i-heroicons-check-circle'
    });
  }

  function showError(message: string): void {
    toast.add({
      title: t('messages.general.notificationError'),
      description: message,
      icon: 'i-heroicons-outline-x',
      color: 'rose'
    });
  }

  function showNotification(
    message: string | string[],
    variant?: Notifications
  ): void {
    const handleNotification = (messageItem: string) => {
      if (Notifications.error === variant) {
        showError(messageItem);
      } else if (Notifications.warning === variant) {
        showWarning(messageItem);
      } else if (Notifications.success === variant) {
        showSuccess(messageItem);
      } else {
        showInfo(messageItem);
      }
    };

    if (Array.isArray(message)) {
      message.forEach((item: string) => handleNotification(item));
      return;
    }

    handleNotification(message);
  }

  return {
    showNotification,
    showError,
    showInfo,
    showSuccess,
    showWarning
  };
}
