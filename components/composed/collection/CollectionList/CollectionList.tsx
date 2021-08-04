import React from "react";
import useModelListPage from "hooks/useModelListPage";
import { columns } from "components/composed/model/ModelList";
import { ModelListPage } from "components/composed/model";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { Connectionish, ExtractsConnection } from "types/graphql-helpers";
import { DataViewOptions } from "components/atomic/DataViewToggle";

interface CollectionNode extends Record<string, unknown> {
  createdAt: string;
  updatedAt: string;
}

function CollectionList<
  Query extends OperationType,
  ConnectionType extends Connectionish,
  NodeType extends CollectionNode
>({
  query,
  queryVars = {},
  toConnection,
  defaultOrder,
}: {
  query: GraphQLTaggedNode;
  queryVars?: Partial<Query["variables"]>;
  toConnection: ExtractsConnection<Query, ConnectionType>;
  defaultOrder: Query["variables"]["order"];
}) {
  const { modelListProps } = useModelListPage<Query, ConnectionType, NodeType>({
    query,
    queryVars,
    defaultOrder,
    toConnection,
    handleEdit: ({ row }) => console.info(`edit ${row.original.slug}`), // eslint-disable-line
    handleDelete: ({ row }) => console.info(`delete ${row.original.slug}`), // eslint-disable-line
    handleSelection: ({ selection }) => console.table(selection), // eslint-disable-line
    columns: [
      columns.thumbnail(),
      columns.name<NodeType>({
        route: "collection",
        accessor: "title",
      }),
      columns.createdAt<NodeType>(),
      columns.updatedAt<NodeType>(),
    ],
  });

  return (
    <>
      <ModelListPage<NodeType>
        modelName="collection"
        defaultView={DataViewOptions.grid}
        {...modelListProps}
      />
    </>
  );
}

export default CollectionList;
