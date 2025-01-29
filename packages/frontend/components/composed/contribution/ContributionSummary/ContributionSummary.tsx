import { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import capitalize from "lodash/capitalize";
import { useTranslation } from "react-i18next";
import { DotList, PrecisionDate, SquareThumbnail } from "components/atomic";
import { getRouteByEntityType } from "helpers";
import Summary from "components/layout/Summary";
import { ContributionSummaryFragment$key } from "@/relay/ContributionSummaryFragment.graphql";
import { ContributionSummaryEntityFragment$key } from "@/relay/ContributionSummaryEntityFragment.graphql";

export default function ContributionSummary({ data, showReadMore }: Props) {
  const contribution = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const entity = useMaybeFragment<ContributionSummaryEntityFragment$key>(
    entityFragment,
    contribution?.entity,
  );

  const route = useMemo(() => {
    return entity?.__typename ? getRouteByEntityType(entity.__typename) : null;
  }, [entity]);

  return contribution && entity && route && entity.slug ? (
    <Summary
      title={entity.title}
      subtitle={entity.subtitle}
      href={`/${route}/${entity.slug}`}
      metadata={
        <DotList className="t-copy-sm t-copy-lighter">
          {contribution.roleLabel && (
            <li>{capitalize(contribution.roleLabel)}</li>
          )}
          {entity.published?.value && (
            <li>
              {t("date.published")} <PrecisionDate data={entity.published} />
            </li>
          )}
        </DotList>
      }
      summary={entity.summary}
      showReadMore={showReadMore}
      thumbnail={
        entity.thumbnail?.storage && <SquareThumbnail data={entity.thumbnail} />
      }
    />
  ) : null;
}

interface Props {
  data?: ContributionSummaryFragment$key | null;
  showReadMore?: true;
}

const fragment = graphql`
  fragment ContributionSummaryFragment on AnyContribution {
    ... on Contribution {
      role
      roleLabel
      contributionRole {
        label
      }
    }
    ... on CollectionContribution {
      entity: collection {
        ...ContributionSummaryEntityFragment
      }
    }
    ... on ItemContribution {
      entity: item {
        ...ContributionSummaryEntityFragment
      }
    }
  }
`;

const entityFragment = graphql`
  fragment ContributionSummaryEntityFragment on Entity {
    __typename
    title
    subtitle
    thumbnail {
      storage
      ...SquareThumbnailFragment
    }

    ... on ReferencesGlobalEntityDates {
      published {
        value
        ...PrecisionDateFragment
      }
    }

    ... on Sluggable {
      slug
    }

    ... on Item {
      summary
    }

    ... on Collection {
      summary
    }
  }
`;
