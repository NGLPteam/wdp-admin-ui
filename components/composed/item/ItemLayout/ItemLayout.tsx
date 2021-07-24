import React from "react";
import { graphql } from "react-relay";
import { ItemLayoutQuery } from "__generated__/ItemLayoutQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { useRouter } from "next/router";
import { useBreadcrumbs } from "hooks";
import { routeQueryArrayToString } from "routes";

export default function ItemLayout({ children }) {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error, isLoading } = useAuthenticatedQuery<ItemLayoutQuery>(
    query,
    { slug: routeQueryArrayToString(slug) }
  );

  const breadcrumbs = useBreadcrumbs(data?.item);

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  const tabRoutes = [
    {
      label: "Child Items",
      route: `collection.child.items`,
    },
    {
      label: "Manage",
      route: `collection.manage`,
    },
  ];

  return (
    <section>
      {data && data.item && (
        <PageHeader
          title={data.item.title}
          breadcrumbsProps={{ data: breadcrumbs }}
          tabRoutes={tabRoutes}
        />
      )}

      {children}
    </section>
  );
}

const query = graphql`
  query ItemLayoutQuery($slug: Slug!) {
    item(slug: $slug) {
      title
      slug
      ...useBreadcrumbsFragment
    }
  }
`;
