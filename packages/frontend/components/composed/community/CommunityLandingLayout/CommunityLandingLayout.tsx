import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import CommunityHero from "../CommunityHero";
import { CommunityLandingLayoutFragment$key } from "@/relay/CommunityLandingLayoutFragment.graphql";
import FeaturedJournals from "components/composed/journal/FeaturedJournals";
import FeaturedCollectionsGrid from "components/composed/collections/FeaturedCollectionsGrid";
import FeaturedIssue from "components/composed/journal/FeaturedIssue";
import FeaturedUnits from "components/composed/unit/FeaturedUnits";

export default function CommunityLayout({ data }: Props) {
  const community = useMaybeFragment(fragment, data);

  return (
    <>
      <CommunityHero data={community} />
      <FeaturedJournals data={community?.featuredJournals} />
      {community?.featuredSeries && (
        <FeaturedCollectionsGrid
          header="layouts.featured_paper_series_header"
          data={community?.featuredSeries}
        />
      )}
      {community?.featuredUnits && (
        <FeaturedUnits data={community?.featuredUnits} />
      )}
      {community?.featuredIssue && (
        <FeaturedIssue data={community.featuredIssue.entity} />
      )}
    </>
  );
}

interface Props {
  data?: CommunityLandingLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityLandingLayoutFragment on Community {
    ...CommunityHeroFragment

    featuredJournals: schemaProperty(fullPath: "featured.journals") {
      ...FeaturedJournalsFragment
    }

    featuredSeries: schemaProperty(fullPath: "featured.series") {
      ...FeaturedCollectionsGridFragment
    }

    featuredIssue: schemaProperty(fullPath: "featured.issue") {
      ... on EntityProperty {
        entity {
          ...FeaturedIssueFragment
        }
      }
    }

    featuredUnits: schemaProperty(fullPath: "featured.units") {
      ...FeaturedUnitsFragment
    }
  }
`;
