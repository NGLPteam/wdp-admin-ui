import { graphql } from "relay-runtime";
import { redirect, notFound } from "next/navigation";
import InstanceCommunities from "components/composed/instance/InstanceCommunities";
import InstanceHero from "components/composed/instance/InstanceHero";
import AppLayout from "@/components/global/AppLayout";
import fetchQuery from "@/lib/relay/fetchQuery";
import UpdateClientEnvironment from "@/lib/relay/UpdateClientEnvironment";
import { pageInstanceContentLayoutQuery as Query } from "@/relay/pageInstanceContentLayoutQuery.graphql";

export default async function HomePage() {
  const { data: instance, records } = await fetchQuery<Query>(query, {});

  const total = instance?.communities?.pageInfo?.totalCount ?? 0;
  const firstSlug = instance?.communities?.edges[0]?.node?.slug ?? null;

  if (total === 1 && firstSlug) {
    const href = `/communities/${firstSlug}`;
    redirect(href);
  }

  if (!instance) return notFound();

  return (
    <UpdateClientEnvironment records={records}>
      <AppLayout>
        <InstanceHero data={instance} />
        <InstanceCommunities data={instance.communities} />
      </AppLayout>
    </UpdateClientEnvironment>
  );
}

const query = graphql`
  query pageInstanceContentLayoutQuery {
    communities(order: POSITION_ASCENDING) {
      edges {
        node {
          slug
        }
      }
      pageInfo {
        totalCount
      }
      ...InstanceCommunitiesFragment
    }
    ...InstanceHeroFragment
  }
`;
