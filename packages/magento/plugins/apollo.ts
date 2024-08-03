import { provideApolloClient } from '@vue/apollo-composable';
import { ApolloClient } from '@apollo/client/core';

export default defineNuxtPlugin(() => {
  const { clients } = useApollo();
  const defaultClient: ApolloClient<any> = (clients as any).default;

  provideApolloClient(defaultClient);
});
