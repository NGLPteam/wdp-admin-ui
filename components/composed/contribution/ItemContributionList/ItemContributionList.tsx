import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import {
  ItemContributionListFragment,
  ItemContributionListFragment$key,
} from "@/relay/ItemContributionListFragment.graphql";
import type { ModelTableActionProps } from "react-table";
import { CellProps } from "react-table";
import { useMaybeFragment, useDestroyer, useDrawerHelper } from "hooks";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import { NamedLink } from "components/atomic";
import GetContributorDisplayName from "components/composed/contributor/ContributorDisplayName/ContributorDisplayName";

function ItemContributionList<T extends OperationType>({
  data,
  headerStyle,
  nameColumn = "item",
  hideHeader,
}: ItemContributionListProps) {
  const itemContributions = useMaybeFragment<ItemContributionListFragment$key>(
    fragment,
    data
  );
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

  const collectionNameColumn = {
    Header: "Name",
    id: "Name",
    disableSortBy: true,
    accessor: (row: ItemContributionNode) => {
      return row?.item?.title;
    },
    Cell: ({ row, value }: CellProps<ItemContributionNode>) => {
      return (
        <NamedLink
          route="item"
          routeParams={{ slug: row.original.item.slug }}
          passHref
        >
          <a className="t-weight-md a-link">{value}</a>
        </NamedLink>
      );
    },
  };

  const contributorNameColumn = {
    Header: "Name",
    id: "Name",
    disableSortBy: true,
    accessor: (row: ItemContributionNode) => {
      return row?.contributor;
    },
    Cell: ({ row }: CellProps<ItemContributionNode>) => {
      if (row?.original.contributor.__typename === "%other") return null;

      return (
        <NamedLink
          route="contributor"
          routeParams={{ slug: row.original.contributor.slug }}
          passHref
        >
          <a className="t-weight-md a-link">
            <GetContributorDisplayName contributor={row.original.contributor} />
          </a>
        </NamedLink>
      );
    },
  };

  const columns = [
    nameColumn === "item" ? collectionNameColumn : contributorNameColumn,
    {
      Header: "Role",
      id: "role",
      accessor: (originalRow: ItemContributionNode) => originalRow.role,
      disableSortBy: true,
    },
    ModelColumns.CreatedAtColumn<ItemContributionNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<ItemContributionNode>) =>
      drawerHelper.open("editItemContribution", {
        drawerSlug: row.original.slug,
      }),
    handleDelete: ({ row }: ModelTableActionProps<ItemContributionNode>) =>
      destroy.contribution(
        { contributionId: row.original.id },
        "glossary.contribution.label"
      ),
  };

  return (
    <ModelListPage<T, ItemContributionListFragment, ItemContributionNode>
      modelName="item_contribution"
      columns={columns}
      actions={actions}
      viewOptions={[DataViewOptions.table]}
      data={itemContributions}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface ItemContributionListProps {
  data?: ItemContributionListFragment$key;
  headerStyle?: "primary" | "secondary";
  nameColumn?: "item" | "contributor";
  hideHeader?: boolean;
}

type ItemContributionNode = ItemContributionListFragment["nodes"][number];

const fragment = graphql`
  fragment ItemContributionListFragment on ItemContributionConnection {
    nodes {
      id
      slug
      createdAt
      updatedAt
      role
      contributor {
        __typename
        ... on OrganizationContributor {
          slug
          legalName
        }
        ... on PersonContributor {
          slug
          givenName
          familyName
        }
      }
      item {
        slug
        title
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default ItemContributionList;
