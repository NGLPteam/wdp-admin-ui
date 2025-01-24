import { useMemo, Fragment } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@wdp/lib/hooks";
import NamedLink from "@/components/atomic/links/NamedLink";
import {
  ContributorsListFragment$data,
  ContributorsListFragment$key,
} from "@/relay/ContributorsListFragment.graphql";
import ContributorName from "../ContributorName";

type Node = NonNullable<ContributorsListFragment$data["nodes"]>[number];

export default function ContributorsList({
  data,
  className,
  itemSlug,
  collectionSlug,
  filterRole,
  noLinks = false,
}: Props) {
  const contributionData = useFragment(fragment, data);

  const { t } = useTranslation();

  const size = useWindowSize();

  const limit = useMemo(() => {
    if (!size?.width) return 4;

    return size.width < 541 ? 2 : size.width < 769 ? 3 : 4;
  }, [size]);

  const contributions = useMemo(() => {
    // Filter contributions by role, or return all contributions
    return filterRole
      ? contributionData?.nodes?.filter(
          ({ roleLabel }: Node) =>
            roleLabel &&
            roleLabel.toLowerCase() === filterRole.toLocaleLowerCase(),
        )
      : contributionData?.nodes || [];
  }, [contributionData, filterRole]);

  return contributions && contributions.length > 0 ? (
    <span className={className}>
      {contributions.slice(0, limit).map(({ contributor }: Node, i: number) => {
        const params = new URLSearchParams({
          ...(itemSlug && { item: itemSlug }),
          ...(collectionSlug && {
            collection: collectionSlug,
          }),
        });
        const href = contributor.slug
          ? `/contributors/${contributor.slug}?${params.toString()}`
          : "#";

        return (
          <Fragment key={i}>
            {contributor.slug && !noLinks ? (
              <>
                <NamedLink href={href}>
                  <ContributorName data={contributor} />
                </NamedLink>
                {i < contributions.length - 1 && ", "}
              </>
            ) : (
              <>
                <ContributorName data={contributor} />
                {i < contributions.length - 1 && ", "}
              </>
            )}
          </Fragment>
        );
      })}
      {contributions.length > limit && (
        <>{t("list.and_x_more", { count: contributions.length - limit })}</>
      )}
    </span>
  ) : null;
}

interface Props {
  data?: ContributorsListFragment$key | null;
  label?: string;
  className?: string;
  /** Pass this in to add the parent item's slug to the contributor route */
  itemSlug?: string;
  /** Pass this in to add the parent collection's slug to the contributor route */
  collectionSlug?: string;
  /** Filter by a role, such as 'author' */
  filterRole?: string;
  noLinks?: boolean;
}

const fragment = graphql`
  fragment ContributorsListFragment on Paginated {
    ... on ItemContributionConnection {
      nodes {
        roleLabel
        contributionRole {
          label
        }
        contributor {
          ... on Sluggable {
            slug
          }
          ...ContributorNameFragment
        }
      }
    }
    ... on CollectionContributionConnection {
      nodes {
        roleLabel
        contributionRole {
          label
        }
        contributor {
          ... on Sluggable {
            slug
          }
          ...ContributorNameFragment
        }
      }
    }
  }
`;
