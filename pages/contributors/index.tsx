import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  contributorsQuery as Query,
  contributorsQueryResponse as QueryResponse,
} from "__generated__/contributorsQuery.graphql";
import ContributorList from "components/composed/contributor/ContributorList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["contributors"];
type NodeType = Exclude<
  ConnectionType["nodes"][number],
  { readonly __typename: "%other" }
>;

export default function ContributorListView() {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.contributors,
    []
  );

  return (
    <ContributorList<Query, ConnectionType, NodeType>
      defaultOrder="RECENT"
      query={query}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query contributorsQuery($order: SimpleOrder!, $page: Int!) {
    contributors(order: $order, page: $page, perPage: 20) {
      nodes {
        __typename
        ... on OrganizationContributor {
          slug
          name: legalName
          createdAt
          updatedAt
        }
        ... on PersonContributor {
          slug
          firstName: givenName
          lastName: familyName
          createdAt
          updatedAt
        }
      }
      pageInfo {
        page
        perPage
        pageCount
        hasNextPage
        hasPreviousPage
        totalCount
        totalUnfilteredCount
      }
    }
  }
`;
