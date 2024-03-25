import { Suspense } from "react";
import { graphql } from "relay-runtime";
import { notFound } from "next/navigation";
import AppLayout from "components/global/AppLayout";
import SearchLayout from "components/composed/search/SearchLayout";
import LoadingBlock from "components/atomic/loading/LoadingBlock";
import normalizeRouteQueryArray from "@wdp/lib/routes/helpers/normalizeRouteQueryArray";
import routeQueryArrayToString from "@wdp/lib/routes/helpers/routeQueryArrayToString";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import { pageSearchCollectionQuery as Query } from "@/relay/pageSearchCollectionQuery.graphql";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import fetchQuery from "@/lib/relay/fetchQuery";
import { BasePageParams } from "@/types/page";

export default async function CollectionSearchPage({
  params,
  searchParams,
}: BasePageParams & { searchParams: Record<string, string> }) {
  const { slug } = params;
  const { q, filters, page, order, schema } = searchParams;

  const { data, records } = await fetchQuery<Query>(query, {
    slug,
    ...(q && { query: q }),
    predicates: filters ? routeQueryArrayToString(filters) : [],
    page: page ?? 1,
    order: order ?? "PUBLISHED_ASCENDING",
    schema: schema ? normalizeRouteQueryArray(schema) : [],
  });

  const { collection } = data ?? {};

  if (!collection) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AppLayout communityData={collection.community} entityData={collection}>
        <EntityLayoutFactory data={collection}>
          <Suspense fallback={<LoadingBlock />}>
            <SearchLayout data={collection} scoped />
          </Suspense>
        </EntityLayoutFactory>
      </AppLayout>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageSearchCollectionQuery(
    $slug: Slug!
    $query: String
    $predicates: [SearchPredicateInput!]
    $page: Int
    $order: EntityOrder
    $schema: [String!]
  ) {
    collection(slug: $slug) {
      ...SearchLayoutEntityFragment
        @arguments(
          query: $query
          predicates: $predicates
          page: $page
          order: $order
          schema: $schema
        )
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
