import { graphql } from '../generated/gql';

export const RouteData = graphql(`
  fragment RouteData on RoutableInterface {
    redirect_code
    relative_url
    type
  }
`);
