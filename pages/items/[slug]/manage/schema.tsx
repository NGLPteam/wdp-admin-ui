import React from "react";
import { graphql } from "react-relay";
import type { schemaManageSlugItemsPagesQuery as Query } from "@/relay/schemaManageSlugItemsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import SchemaInstanceForm from "components/api/SchemaInstanceForm";

function ManageDetails({ data }: Props) {
  if (!data || !data.item) return null;

  return (
    <SchemaInstanceForm
      instance={data?.item}
      successNotification="forms.item.update.schemaSuccess"
      failureNotification="forms.item.update.schemaFailure"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
ManageDetails.getLayout = getLayout;

export default ManageDetails;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query schemaManageSlugItemsPagesQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...SchemaInstanceFormFragment
    }
  }
`;