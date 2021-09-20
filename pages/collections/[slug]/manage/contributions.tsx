import React from "react";
import { graphql } from "react-relay";
import type { contributionsManageSlugCollectionsPagesQuery as Query } from "@/relay/contributionsManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";

function CollectionContributions({ data }: Props) {
  return (
    <CollectionContributionList<Query>
      nameColumn="contributor"
      data={data?.collection?.contributions}
      headerStyle="secondary"
    />
  );
}

type Props = {
  data: Query["response"];
};

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
      showSidebar
      useRouteHeader={false}
      query={query}
      {...props}
    />
  );
};
CollectionContributions.getLayout = getLayout;

const query = graphql`
  query contributionsManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      contributions {
        ...CollectionContributionListFragment
      }
    }
  }
`;

export default CollectionContributions;
