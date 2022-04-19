import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { useRefetchable } from "relay-hooks/lib/useRefetchable";
import AppLayout from "components/global/AppLayout";
import { searchCollectionQuery as Query } from "@/relay/searchCollectionQuery.graphql";
import SearchLayout from "components/composed/search/SearchLayout";
import { SearchLayoutEntityQuery } from "@/relay/SearchLayoutEntityQuery.graphql";
import { searchCollectionQueryFragment$key } from "@/relay/searchCollectionQueryFragment.graphql";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";

function SearchLayoutQuery({
  data,
}: {
  data: searchCollectionQueryFragment$key;
}) {
  const {
    data: searchData,
    refetch,
    isLoading,
  } = useRefetchable<
    SearchLayoutEntityQuery,
    searchCollectionQueryFragment$key
  >(fragment, data);

  return (
    <SearchLayout refetch={refetch} data={searchData} isLoading={isLoading} />
  );
}

export default function SearchPage() {
  const slug = useRouteSlug();

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        slug: slug || "",
      }}
    >
      {({ data }) => (
        <AppLayout communityData={data?.collection?.community}>
          <EntityLayoutFactory data={data?.collection}>
            {data?.collection && <SearchLayoutQuery data={data.collection} />}
          </EntityLayoutFactory>
        </AppLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query searchCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...EntityLayoutFactoryFragment
      ...searchCollectionQueryFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;

const fragment = graphql`
  fragment searchCollectionQueryFragment on Collection
  @refetchable(queryName: "SearchLayoutCollectionQuery")
  @argumentDefinitions(
    query: { type: "String", defaultValue: "" }
    predicates: { type: "[SearchPredicateInput!]", defaultValue: [] }
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder", defaultValue: PUBLISHED_ASCENDING }
  ) {
    ...SearchLayoutFragment
      @arguments(
        query: $query
        predicates: $predicates
        page: $page
        order: $order
      )
  }
`;