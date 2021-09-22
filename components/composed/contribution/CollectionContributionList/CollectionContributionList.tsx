import React from "react";
import { graphql } from "react-relay";
import type { OperationType } from "relay-runtime";
import type {
  CollectionContributionListFragment,
  CollectionContributionListFragment$key,
} from "@/relay/CollectionContributionListFragment.graphql";
import type { ModelTableActionProps } from "react-table";
import { CellProps } from "react-table";
import { useMaybeFragment, useDestroyer, useDrawerHelper } from "hooks";

import { NamedLink } from "components/atomic";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import GetContributorDisplayName from "components/composed/contributor/ContributorDisplayName";
import PageHeader from "components/layout/PageHeader";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CollectionContributionList<T extends OperationType>({
  data,
  headerStyle,
  nameColumn = "collection",
  hideHeader,
}: CollectionContributionListProps) {
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();

  /* eslint-disable max-len */
  const collectionContributions = useMaybeFragment<CollectionContributionListFragment$key>(
    fragment,
    data
  );
  /* eslint-enable max-len */

  const collectionNameColumn = {
    Header: "Name",
    id: "Name",
    disableSortBy: true,
    accessor: (row: CollectionContributionNode) => {
      return row?.collection?.title;
    },
    Cell: ({ row, value }: CellProps<CollectionContributionNode>) => {
      return (
        <NamedLink
          route="collection"
          routeParams={{ slug: row.original.collection.slug }}
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
    accessor: (row: CollectionContributionNode) => {
      return row?.contributor;
    },
    Cell: ({ row }: CellProps<CollectionContributionNode>) => {
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
    nameColumn === "collection" ? collectionNameColumn : contributorNameColumn,
    {
      Header: "Role",
      id: "role",
      accessor: (originalRow: CollectionContributionNode) => originalRow.role,
      disableSortBy: true,
    },
    ModelColumns.CreatedAtColumn<CollectionContributionNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<CollectionContributionNode>) =>
      drawerHelper.open("editCollectionContribution", {
        drawerSlug: row.original.slug,
      }),
    handleDelete: ({
      row,
    }: ModelTableActionProps<CollectionContributionNode>) =>
      destroy.contribution(
        { contributionId: row.original.id },
        "glossary.contribution.label"
      ),
  };

  return (
    <ModelListPage<
      T,
      CollectionContributionListFragment,
      CollectionContributionNode
    >
      modelName="collection_contribution"
      columns={columns}
      actions={actions}
      data={collectionContributions}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface CollectionContributionListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: CollectionContributionListFragment$key;
  nameColumn?: "collection" | "contributor";
}

type CollectionContributionNode = CollectionContributionListFragment["nodes"][number];

const fragment = graphql`
  fragment CollectionContributionListFragment on CollectionContributionConnection {
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
      collection {
        title
        slug
      }
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default CollectionContributionList;
