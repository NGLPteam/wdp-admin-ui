import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import { useDestroyer, useDrawerHelper } from "hooks";
import {
  CollectionListFragment,
  CollectionListFragment$key,
} from "@/relay/CollectionListFragment.graphql";
import { graphql, useFragment } from "react-relay";
import ModelColumns from "components/composed/model/ModelColumns";
import type { ModelTableActionProps } from "react-table";

function CollectionList<T extends OperationType>({
  data,
}: CollectionListProps) {
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();

  const collections = useFragment<CollectionListFragment$key>(
    fragment,
    data || null
  );

  const columns = [
    ModelColumns.ThumbnailColumn<CollectionNode>(),
    ModelColumns.NameColumn<CollectionNode>({
      route: "collection",
      accessor: "title",
    }),
    ModelColumns.CreatedAtColumn<CollectionNode>(),
    ModelColumns.UpdatedAtColumn<CollectionNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CollectionNode>) =>
      drawerHelper.open("editCollection", { drawerSlug: row.original.slug }),
    handleDelete: ({ row }: ModelTableActionProps<CollectionNode>) =>
      destroy.collection(
        { collectionId: row.original.id },
        row.original.title || "glossary.collection"
      ),
  };

  return (
    <ModelListPage<T, CollectionListFragment, CollectionNode>
      modelName="collection"
      columns={columns}
      actions={actions}
      selectable
      data={collections}
    />
  );
}

interface CollectionListProps {
  data?: CollectionListFragment$key;
}

type CollectionNode = CollectionListFragment["nodes"][number];

const fragment = graphql`
  fragment CollectionListFragment on CollectionConnection {
    nodes {
      id
      createdAt
      updatedAt
      title
      slug
      thumbnail {
        image: medium {
          png {
            url
            height
            width
            alt
          }
        }
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default CollectionList;
