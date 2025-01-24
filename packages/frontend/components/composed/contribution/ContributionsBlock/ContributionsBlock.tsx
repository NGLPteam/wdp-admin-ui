"use client";

import { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import {
  ContributionsBlockFragment$key,
  ContributionsBlockFragment$data,
} from "@/relay/ContributionsBlockFragment.graphql";
import Contributor from "@/components/templates/Contributors/Contributor";
import BaseContributionsBlock from "./BaseContributionsBlock";

type BaseProps = Omit<
  React.ComponentProps<typeof BaseContributionsBlock>,
  "children"
>;

const ContributionsBlock = ({ data, filterRole, ...baseProps }: Props) => {
  const contributionData = useMaybeFragment(fragment, data);

  const showAvatars = useMemo(() => {
    return contributionData?.nodes?.some(
      (node: Node) => node.contributor?.image?.storage,
    );
  }, [contributionData]);

  const contributions = contributionData?.nodes?.filter(
    (node: Node) =>
      !filterRole ||
      (node.roleLabel &&
        node.roleLabel.toLowerCase() === filterRole.toLowerCase()),
  );

  return (
    <BaseContributionsBlock {...baseProps}>
      {contributions && contributions.length > 0
        ? contributions.map((node: Node) => (
            <Contributor data={node} key={node.slug} showAvatar={showAvatars} />
          ))
        : null}
    </BaseContributionsBlock>
  );
};

interface Props extends BaseProps {
  data?: ContributionsBlockFragment$key | null;
  /** Filter by a role, example: author */
  filterRole?: string;
}

export default ContributionsBlock;

type Node = NonNullable<ContributionsBlockFragment$data["nodes"]>[number];

const fragment = graphql`
  fragment ContributionsBlockFragment on Paginated {
    ... on ItemContributionConnection {
      nodes {
        slug
        roleLabel
        contributionRole {
          label
        }
        contributor {
          ... on PersonContributor {
            image {
              storage
            }
          }
          ... on OrganizationContributor {
            image {
              storage
            }
          }
        }
        ...ContributorFragment
      }
    }

    ... on CollectionContributionConnection {
      nodes {
        slug
        roleLabel
        contributionRole {
          label
        }
        contributor {
          ... on PersonContributor {
            image {
              storage
            }
          }
          ... on OrganizationContributor {
            image {
              storage
            }
          }
        }
        ...ContributorFragment
      }
    }
  }
`;
