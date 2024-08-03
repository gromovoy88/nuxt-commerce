import { graphql } from '../generated/gql';

export const SubscribeGuestNewsletter = graphql(`
  mutation SubscribeGuestNewsletter($email: String!) {
    subscribeEmailToNewsletter(email: $email) {
      status
    }
  }
`);
