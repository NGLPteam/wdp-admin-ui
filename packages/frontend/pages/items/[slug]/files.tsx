import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityChildLayout from "components/composed/community/CommunityChildLayout";
import { filesSlugItemQuery as Query } from "@/relay/filesSlugItemQuery.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityChildLayout data={data} communityData={data?.item?.community}>
          <EntityLayoutFactory data={data?.item}>
            <>Files</>
          </EntityLayoutFactory>
        </CommunityChildLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query filesSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
      community {
        ...CommunityHeroFragment
        ...CommunityChildLayoutFragment
      }
    }
    ...CommunityChildLayoutAppFragment
  }
`;
