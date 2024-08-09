export interface UseNewsletter {
  subscribeGuestToNewsletter: (email: string) => Promise<string>;
}

export function useNewsletter(): UseNewsletter {
  async function subscribeGuestToNewsletter(email: string): Promise<string> {
    return await $fetch(`/api/newsletter/guest-subscribe`, {
      method: 'POST',
      body: {
        email
      }
    });
  }

  return {
    subscribeGuestToNewsletter
  };
}
