import { GraphQLTaggedNode } from "react-relay";
import { useTranslation } from "react-i18next";
import { OperationType, graphql } from "relay-runtime";
import type { ModelTableActionProps } from "@tanstack/react-table";
import SetIntitialOrderingButton from "../SetIntitialOrderingButton";
import { useMaybeFragment, useDestroyer, useDrawerHelper } from "hooks";
import { EntityOrderingListFragment$key } from "@/relay/EntityOrderingListFragment.graphql";
import {
  EntityOrderingListDataFragment$data,
  EntityOrderingListDataFragment$key,
} from "@/relay/EntityOrderingListDataFragment.graphql";
import { PageHeader } from "components/layout";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import useResetOrdering from "hooks/useResetOrdering";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function EntityOrderingList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: Props) {
  const { t } = useTranslation();

  const destroy = useDestroyer();

  const resetOrdering = useResetOrdering();

  const drawerHelper = useDrawerHelper();

  /* Get the order data */
  const sourceEntity = useMaybeFragment<EntityOrderingListFragment$key>(
    fragment as GraphQLTaggedNode,
    data
  );

  const collectionOrderings =
    useMaybeFragment<EntityOrderingListDataFragment$key>(
      orderingsfragment as GraphQLTaggedNode,
      sourceEntity?.orderings
    );

  /* Set the table columns */
  const columns = [
    ModelColumns.StringColumn<EntityOrderingNode>({
      header: () => <>{t("lists.name_column")}</>,
      id: "name",
    }),
    ModelColumns.BooleanColumn<EntityOrderingNode>({
      header: () => <>{t("lists.inherited_from_schema_column")}</>,
      id: "inheritedFromSchema",
    }),
    ModelColumns.BooleanColumn<EntityOrderingNode>({
      header: () => <>{t("lists.disabled_column")}</>,
      id: "disabled",
    }),
    ModelColumns.BooleanColumn<EntityOrderingNode>({
      header: () => <>{t("lists.initial_ordering_column")}</>,
      id: "initial",
    }),
    ModelColumns.CreatedAtColumn<EntityOrderingNode>({
      enableSorting: false,
    }),
  ];

  /* eslint-disable no-console */
  const actions = {
    handleDelete: ({ row }: ModelTableActionProps<EntityOrderingNode>) =>
      destroy.ordering(
        { orderingId: row.original.id },
        row.original.name || "glossary.ordering"
      ),
    hideDelete: ({ row }: ModelTableActionProps<EntityOrderingNode>) =>
      row.original.inheritedFromSchema,
    handleDisable: ({ row }: ModelTableActionProps<EntityOrderingNode>) =>
      destroy.ordering(
        { orderingId: row.original.id },
        row.original.name || "glossary.ordering"
      ),
    hideDisable: ({ row }: ModelTableActionProps<EntityOrderingNode>) =>
      !row.original.inheritedFromSchema || row.original.disabled,
    handleEdit: ({ row }: ModelTableActionProps<EntityOrderingNode>) =>
      drawerHelper.open("editOrdering", {
        drawerSlug: sourceEntity?.slug || "",
        drawerIdentifier: row.original.identifier || "",
      }),
    handleEnable: ({ row }: ModelTableActionProps<EntityOrderingNode>) => {
      resetOrdering(
        { orderingId: row.original.id },
        row.original.name || "glossary.ordering",
        ["orderings"]
      );
    },
    hideEnable: ({ row }: ModelTableActionProps<EntityOrderingNode>) =>
      !row.original.inheritedFromSchema || !row.original.disabled,
  };
  /* eslint-enable no-console */

  const buttons = (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <SetIntitialOrderingButton data={sourceEntity} />
      <ButtonControlDrawer
        drawer="addOrdering"
        drawerQuery={{
          drawerSlug: sourceEntity?.slug,
        }}
        icon="plus"
        actions="self.update"
      >
        {t("actions.add.ordering")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return (
    <ModelListPage<T, EntityOrderingListDataFragment$data, EntityOrderingNode>
      modelName="ordering"
      columns={columns}
      data={collectionOrderings}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      actions={actions}
      buttons={buttons}
    />
  );
}

type EntityOrderingNode =
  EntityOrderingListDataFragment$data["edges"][number]["node"];

interface Props extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: EntityOrderingListFragment$key;
}

export default EntityOrderingList;

const orderingsfragment = graphql`
  fragment EntityOrderingListDataFragment on OrderingConnection {
    edges {
      node {
        id
        name
        slug
        inheritedFromSchema
        disabled
        createdAt
        identifier
        initial
      }
    }
    ...ModelListPageFragment
  }
`;

const fragment = graphql`
  fragment EntityOrderingListFragment on AnyEntity {
    ... on Item {
      slug
      orderings(page: $page) {
        ...EntityOrderingListDataFragment
      }
    }
    ... on Collection {
      slug
      orderings(page: $page) {
        ...EntityOrderingListDataFragment
      }
    }
    ...SetIntitialOrderingButtonFragment
  }
`;
