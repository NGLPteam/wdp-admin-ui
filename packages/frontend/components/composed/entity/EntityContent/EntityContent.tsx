import React, { useEffect } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { RouteHelper } from "routes";
import { EntityContentFragment$key } from "@/relay/EntityContentFragment.graphql";

export default function EntityContent({ data, children }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const router = useRouter();

  const route = RouteHelper.findRouteByName("collection.browse");

  useEffect(() => {
    const firstOrdering = entity?.orderings?.edges[0];

    const type = entity?.__typename;

    // Redirect to entity collection ordering
    if (firstOrdering?.node && route && type !== "Item") {
      router.replace({
        pathname: route.path,
        query: { ...router.query, ordering: firstOrdering.node.identifier },
      });
    }
  }, [router, entity, route]);

  return <>{children}</>;
}

interface Props {
  data?: EntityContentFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment EntityContentFragment on Entity {
    __typename
    orderings {
      edges {
        node {
          identifier
        }
      }
    }
  }
`;
