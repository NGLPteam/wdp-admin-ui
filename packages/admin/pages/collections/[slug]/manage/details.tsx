import React from "react";
import { graphql } from "react-relay";
import type { GetLayout } from "@wdp/lib/types/page";
import type { detailsManageSlugCollectionsPagesQuery as Query } from "@/relay/detailsManageSlugCollectionsPagesQuery.graphql";

import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";
import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";
import { LoadingCircle } from "components/atomic";

function CollectionDetails({ data }: Props) {
  return data && data.collection ? (
    <>
      <CollectionUpdateForm data={data?.collection} />
      <SchemaInstanceForm
        instance={data?.collection}
        schemaKind="COLLECTION"
        successNotification="forms.collection.update.schemaSuccess"
        failureNotification="forms.collection.update.schemaFailure"
      />
    </>
  ) : (
    <LoadingCircle />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props> showSidebar query={query} {...props} />
  );
};
CollectionDetails.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query detailsManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      ...CollectionUpdateFormFragment
      ...SchemaInstanceFormFragment
    }
  }
`;

export default CollectionDetails;
