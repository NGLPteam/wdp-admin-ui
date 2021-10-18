import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useDestroyer, useMaybeFragment, useRouteSlug } from "hooks";
import {
  UserItemsListFragment,
  UserItemsListFragment$data,
  UserItemsListFragment$key,
} from "@/relay/UserItemsListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import {
  ButtonControlDrawer,
  ButtonControlGroup,
  NamedLink,
} from "components/atomic";
import type { CellProps, ModelTableActionProps } from "react-table";

const UserItemsList = <T extends OperationType>({ data }: Props) => {
  const communities = useMaybeFragment<UserItemsListFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();
  const destroy = useDestroyer();
  const slug = useRouteSlug();

  const columns = [
    ModelColumns.ThumbnailColumn<Node>({
      accessor: (row: Node) => row?.item?.thumbnail?.image,
    }),
    ModelColumns.NameColumn<Node>({
      route: "item",
      accessor: "item",
      Cell: ({ row, value }: CellProps<Node>) => {
        if (!row?.original?.item?.slug) return value;
        return (
          <NamedLink
            route="item"
            routeParams={{ slug: row.original.item.slug }}
            passHref
          >
            <a className="t-weight-md a-link">{row.original.item.title}</a>
          </NamedLink>
        );
      },
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.role")}</>,
      id: "role",
      accessor: (row: Node) => {
        return row?.role.name;
      },
    }),
  ];

  const actions = {
    handleDelete: ({ row }: ModelTableActionProps<Node>) => {
      const { item, role, user } = row.original;

      if (item && role && user) {
        return destroy.access(
          {
            entityId: item.id,
            roleId: role.id,
            userId: user.id,
          },
          "glossary.access.label"
        );
      }

      console.warn("No entity, role or user defined.");
    },
  };

  const buttons = slug && (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addUserItemAccess"
        drawerQuery={{ drawerSlug: slug, drawerEntity: "item" }}
        icon="plus"
      >
        {t("actions.add.item")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return communities ? (
    <ModelListPage<T, UserItemsListFragment, Node>
      modelName="item"
      columns={columns}
      data={communities}
      headerStyle="secondary"
      header="Managed Items"
      disableSortBy
      buttons={buttons}
      actions={actions}
    />
  ) : null;
};

interface Props {
  data?: UserItemsListFragment$key | null;
}

type Node = UserItemsListFragment$data["edges"][number]["node"];

const fragment = graphql`
  fragment UserItemsListFragment on UserItemAccessGrantConnection {
    edges {
      node {
        id
        item {
          id
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
        role {
          id
          name
        }
        user {
          id
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default UserItemsList;
