import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import BaseLayout from "components/composed/base/BaseLayout";
import SearchLayout from "components/composed/search/SearchLayout";
import { searchQuery as Query } from "@/relay/searchQuery.graphql";

export default function SearchPage() {
  const slug = useRouteSlug();

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => (
        <BaseLayout data={data}>
          <SearchLayout />
        </BaseLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query searchQuery {
    ...BaseLayoutFragment
  }
`;
