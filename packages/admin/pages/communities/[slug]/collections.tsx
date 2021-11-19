import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import { collectionsSlugCommunitiesPagesQuery as Query } from "__generated__/collectionsSlugCommunitiesPagesQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

function CommunityChildCollections({ data }: Props) {
  return (
    <CollectionList<Query>
      data={data?.community?.collections}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <CommunityLayoutQuery<Query, Props> query={query} {...props} />;
};
CommunityChildCollections.getLayout = getLayout;

export default CommunityChildCollections;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query collectionsSlugCommunitiesPagesQuery(
    $order: SimpleOrder!
    $page: Int!
    $communitySlug: Slug!
  ) {
    community(slug: $communitySlug) {
      ...CommunityLayoutQueryFragment
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
    }
  }
`;
