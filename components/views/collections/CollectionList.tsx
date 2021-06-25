import React, { useState } from "react";
import { graphql } from "react-relay";
import {
  CollectionListQuery,
  CollectionListQueryVariables,
} from "__generated__/CollectionListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { Card, CardList } from "components/layout/CardList/CardList";
import Link from "next/link";
import { FullPageLoader } from "components/global";
import { Pagination } from "components/atomic";
import CollectionHeaders from "./CollectionHeadersPartial";

export default function CollectionList() {
  const handleSubmit = (value) => {
    console.info("submitted value", value);
  };

  const [variables, setVariables] = useState<CollectionListQueryVariables>({
    order: "RECENT",
    page: 1,
  });

  const { data, error, isLoading } = useAuthenticatedQuery<CollectionListQuery>(
    query,
    variables
  );

  const currentPage = 1;
  const totalPages = 1;

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <PageHeader title="Collections" />
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <>
          <CardList>
            <CollectionHeaders
              variables={variables}
              setVariables={setVariables}
            />
            {data?.viewer?.collections?.nodes ? (
              data.viewer.collections.nodes.map((collection, index) => (
                <Card key={index}>
                  <h4>
                    <Link href={`/collections/${collection.slug}`}>
                      {collection.title}
                    </Link>
                  </h4>
                </Card>
              ))
            ) : data?.viewer === null ? (
              <div>No collections.</div>
            ) : null}
          </CardList>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onSubmitPage={handleSubmit}
            onNextPage={`collections?page=${currentPage - 1}`}
            onPrevPage={`collections?page=${currentPage + 1}`}
          />
        </>
      )}
    </section>
  );
}

const query = graphql`
  query CollectionListQuery($order: SimpleOrder!, $page: Int!) {
    viewer {
      collections(access: READ_ONLY, order: $order, page: $page, perPage: 20) {
        nodes {
          __typename
          id
          identifier
          title
          slug
          allowedActions
          hierarchicalDepth
          breadcrumbs {
            depth
            label
            kind
            slug
            crumb {
              __typename
              ... on Entity {
                hierarchicalDepth
                allowedActions
              }
              ... on Community {
                name
              }
              ... on Collection {
                title
              }
              ... on Item {
                title
                breadcrumbs {
                  depth
                  label
                  kind
                  slug
                }
              }
            }
          }
        }
        pageInfo {
          page
          perPage
          pageCount
          hasNextPage
          hasPreviousPage
          totalCount
        }
      }
    }
  }
`;
