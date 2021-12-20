import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRoutePageSlug, useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { PageSlugItemQuery as Query } from "@/relay/PageSlugItemQuery.graphql";
import EntityPageLayoutFactory from "components/factories/EntityPageLayoutFactory";

export default function ItemPage() {
  const slug = useRouteSlug();
  const pageSlug = useRoutePageSlug();

  return slug && pageSlug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, pageSlug }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.item?.community}>
          <EntityPageLayoutFactory data={data?.item} />
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query PageSlugItemQuery($slug: Slug!, $pageSlug: String!) {
    item(slug: $slug) {
      ...EntityPageLayoutFactoryFragment

      community {
        ...CommunityLayoutFragment
      }
    }
    ...CommunityLayoutAppFragment
  }
`;
