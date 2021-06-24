import React, { useState } from "react";
import { graphql } from "react-relay";
import {
  ContributorListQuery,
  ContributorListQueryVariables,
} from "__generated__/ContributorListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { Card, CardList } from "components/layout/CardList/CardList";
import Link from "next/link";
import { FullPageLoader } from "components/global";
import ContributorHeaders from "./ContributorHeadersPartial";

export default function ContributorList() {
  const [variables, setVariables] = useState<Variables>({
    order: "RECENT",
  });

  const {
    data,
    error,
    isLoading,
  } = useAuthenticatedQuery<ContributorListQuery>(query, variables);

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <PageHeader title="Contributors" />
      <CardList>
        <ContributorHeaders variables={variables} setVariables={setVariables} />
        {data?.contributors?.nodes ? (
          data.contributors.nodes.map((contributor, index) => (
            <Card key={index}>
              <h4>
                <Link href={`/contributors/${contributor.slug}`}>
                  {contributor.name ||
                    `${contributor.firstName} ${contributor.lastName}`}
                </Link>
              </h4>
            </Card>
          ))
        ) : data?.contributors === null ? (
          <div>No Contributors.</div>
        ) : (
          <FullPageLoader />
        )}
      </CardList>
    </section>
  );
}

export interface Variables extends ContributorListQueryVariables {
  order: "RECENT" | "OLDEST";
}

// TODO: make breadcrumbs into a fragment to live within breadcrumbs
const query = graphql`
  query ContributorListQuery($order: SimpleOrder!) {
    contributors(order: $order) {
      nodes {
        __typename
        ... on OrganizationContributor {
          name: legalName
          slug
        }

        ... on PersonContributor {
          firstName: givenName
          lastName: familyName
          slug
        }
      }
    }
  }
`;
