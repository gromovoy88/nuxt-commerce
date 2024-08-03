import { graphql } from '../generated/gql';

export const ChangePassword = graphql(`
  mutation ChangePassword($currentPassword: String!, $newPassword: String!) {
    changeCustomerPassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      ...CustomerData
    }
  }
`);
