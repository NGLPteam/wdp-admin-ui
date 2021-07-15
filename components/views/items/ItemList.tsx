import React, { useCallback } from "react";
import { graphql } from "react-relay";
import {
  ItemListQuery as Query,
  ItemListQueryResponse as QueryResponse,
} from "__generated__/ItemListQuery.graphql";
import ItemList from "components/composed/item/ItemList";

import type { ExtractsConnection } from "types/graphql-helpers";

type ConnectionType = QueryResponse["viewer"]["items"];

export default function ItemListView() {
  const toConnection = useCallback<ExtractsConnection<Query, ConnectionType>>(
    (data) => data?.viewer?.items,
    []
  );

  return (
    <ItemList<Query, ConnectionType>
      defaultOrder="RECENT"
      query={query}
      toConnection={toConnection}
    />
  );
}

const query = graphql`
  query ItemListQuery($order: SimpleOrder!, $page: Int!) {
    viewer {
      items(order: $order, page: $page, perPage: 10) {
        nodes {
          __typename
          id
          identifier
          updatedAt
          createdAt
          title
          slug
          allowedActions
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
  }
`;
