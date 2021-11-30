import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { SlugCommunityQuery as Query } from "@/relay/SlugCommunityQuery.graphql";
import CommunityLandingLayout from "components/composed/community/CommunityLandingLayout";

export default function CommunityPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.community}>
          {data?.community && <CommunityLandingLayout data={data.community} />}
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query SlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityLandingLayoutFragment
      ...CommunityLayoutFragment
    }
    ...CommunityLayoutAppFragment
  }
`;
