import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "hooks";
import {
  UserCommunitiesListFragment,
  UserCommunitiesListFragment$data,
  UserCommunitiesListFragment$key,
} from "@/relay/UserCommunitiesListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import { NamedLink } from "components/atomic";
import type { CellProps } from "react-table";

const UserCommunitiesList = <T extends OperationType>({ data }: Props) => {
  const communities = useMaybeFragment<UserCommunitiesListFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();

  const columns = [
    ModelColumns.NameColumn<Node>({
      route: "community",
      accessor: "community",
      Cell: ({ row, value }: CellProps<Node>) => {
        if (!row?.original?.community?.slug) return value;
        return (
          <NamedLink
            route="community"
            routeParams={{ slug: row.original.community.slug }}
            passHref
          >
            <a className="t-weight-md a-link">{row.original.community.title}</a>
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

  return communities ? (
    <ModelListPage<T, UserCommunitiesListFragment, Node>
      modelName="community"
      columns={columns}
      data={communities}
      headerStyle="secondary"
      disableSortBy
    />
  ) : null;
};

interface Props {
  data?: UserCommunitiesListFragment$key | null;
}

type Node = UserCommunitiesListFragment$data["edges"][number]["node"];

const fragment = graphql`
  fragment UserCommunitiesListFragment on UserCommunityAccessGrantConnection {
    edges {
      node {
        id
        community {
          title
          slug
        }
        role {
          name
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default UserCommunitiesList;
