import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorDetailNav from "../ContributorDetailNav";
import ContributorDetail from "components/composed/contributor/ContributorDetail";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import { ContributorItemDetailLayoutQuery } from "@/relay/ContributorItemDetailLayoutQuery.graphql";
import AppLayout from "components/global/AppLayout";

export default function ContributorItemDetailLayout({
  queryRef,
}: {
  queryRef: PreloadedQuery<ContributorItemDetailLayoutQuery>;
}) {
  const layoutData = usePreloadedQuery<ContributorItemDetailLayoutQuery>(
    query,
    queryRef
  );

  return layoutData ? (
    <AppLayout communityData={layoutData?.item?.community}>
      <ContributorHTMLHead data={layoutData.contributor} />
      <ContributorDetailNav data={layoutData.item} />
      <ContributorDetail data={layoutData.contributor} />
    </AppLayout>
  ) : null;
}

export const query = graphql`
  query ContributorItemDetailLayoutQuery($slug: Slug!, $item: Slug!) {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailFragment
    }

    item(slug: $item) {
      ...ContributorDetailNavFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
