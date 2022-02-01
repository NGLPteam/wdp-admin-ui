import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import AppLayout from "components/global/AppLayout";
import { filesSlugItemQuery as Query } from "@/relay/filesSlugItemQuery.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import AssetsBlock from "components/composed/asset/AssetsBlock";

export default function ItemPage() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <AppLayout data={data} communityData={data?.item?.community}>
          <EntityLayoutFactory data={data?.item}>
            <AssetsBlock data={data?.item?.assets} />
          </EntityLayoutFactory>
        </AppLayout>
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
        ...AppLayoutCommunityFragment
      }
      assets {
        ...AssetsBlockFragment
      }
    }
    ...AppLayoutFragment
  }
`;
