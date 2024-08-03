import { graphql } from '../generated/gql';

export const TrackingLink = graphql(`
  fragment TrackingLink on ShipmentTracking {
    carrier
    number
    title
  }
`);
