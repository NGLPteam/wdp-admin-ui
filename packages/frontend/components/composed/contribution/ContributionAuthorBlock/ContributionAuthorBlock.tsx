"use client";

import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import capitalize from "lodash/capitalize";
import ContributorAvatar from "components/composed/contributor/ContributorAvatar";
import ContributorName from "components/composed/contributor/ContributorName";
import { DotList, Link, NamedLink, Markdown } from "components/atomic";
import { ContributionAuthorBlockFragment$key } from "@/relay/ContributionAuthorBlockFragment.graphql";
import styles from "./ContributrionAuthorBlock.module.css";

export default function ContributionAuthorBlock({ data }: Props) {
  const contribution = useFragment(fragment, data);

  const contributor = contribution?.contributor;

  if (!contribution || !contributor) return null;

  const showAvatar = contributor?.image?.storage ?? null;

  const itemSlug = contribution?.item?.slug;

  const collectionSlug = contribution?.collection?.slug;

  const params = new URLSearchParams({
    ...(itemSlug && { item: itemSlug }),
    ...(collectionSlug && {
      collection: collectionSlug,
    }),
  });
  const entityHref = contribution.contributor.slug
    ? `/contributors/${contribution.contributor.slug}?${params.toString()}`
    : "#";
  const href = contribution.contributor.slug
    ? `/contributors/${contribution.contributor.slug}`
    : "#";

  return (
    <section className="a-bg-custom10">
      <div className={classNames("l-container-wide", styles.inner)}>
        {showAvatar && (
          /* Users are used to images being links, but for a11y we want to only have one tabbable link per contributor  */
          <NamedLink href={href} aria-hidden="true" tabIndex={-1}>
            <div className={styles.avatar}>
              <ContributorAvatar data={contributor.image} />
            </div>
          </NamedLink>
        )}
        <div className={styles.info}>
          <NamedLink href={entityHref} className="default-link-styles">
            <Link as="span">
              <ContributorName data={contributor} />
            </Link>
          </NamedLink>
          {contributor.__typename === "PersonContributor" && (
            <>
              <div className={styles.roles}>
                <DotList className="t-copy-sm t-copy-lighter">
                  {contribution.roleLabel && (
                    <li>{capitalize(contribution.roleLabel)}</li>
                  )}
                  {contributor.title && <li>{contributor.title}</li>}
                  {contributor.affiliation && (
                    <li>{contributor.affiliation}</li>
                  )}
                </DotList>
              </div>
              {contributor.bio && (
                <p className={classNames(styles.bio, "line-clamp-3")}>
                  <Markdown.Summary className="t-copy-sm t-copy-lighter t-rte">
                    {contributor.bio}
                  </Markdown.Summary>
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

type Props = {
  data?: ContributionAuthorBlockFragment$key | null;
};

const fragment = graphql`
  fragment ContributionAuthorBlockFragment on Contribution {
    affiliation
    roleLabel
    contributionRole {
      label
    }
    ... on CollectionContribution {
      collection {
        slug
      }
    }
    ... on ItemContribution {
      item {
        slug
      }
    }
    contributor {
      ... on Sluggable {
        slug
      }
      ... on PersonContributor {
        __typename
        title
        bio
        affiliation
        image {
          storage
          ...ContributorAvatarFragment
        }
        ...ContributorNameFragment
      }
      ... on OrganizationContributor {
        __typename
        bio
        image {
          storage
          ...ContributorAvatarFragment
        }
        ...ContributorNameFragment
      }
    }
  }
`;
