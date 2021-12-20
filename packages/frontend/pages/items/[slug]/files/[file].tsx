import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import CommunityLayout from "components/composed/community/CommunityLayout";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import AssetDetailBlock from "components/composed/asset/AssetDetailBlock";
import { FileSlugItemQuery as Query } from "@/relay/FileSlugItemQuery.graphql";

export default function ItemPage() {
  const router = useRouter();
  const { slug: slugQuery, file: fileQuery } = router.query;
  const slug = routeQueryArrayToString(slugQuery);
  const file = routeQueryArrayToString(fileQuery);

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug, file }}>
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.item?.community}>
          <EntityLayoutFactory data={data?.item}>
            <AssetDetailBlock data={data?.asset} />
          </EntityLayoutFactory>
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <></>
  );
}

const query = graphql`
  query FileSlugItemQuery($slug: Slug!, $file: Slug!) {
    item(slug: $slug) {
      ...EntityLayoutFactoryFragment
      community {
        ...CommunityLayoutFragment
      }
    }
    asset(slug: $file) {
      ...AssetDetailBlockFragment
    }
    ...CommunityLayoutAppFragment
  }
`;
