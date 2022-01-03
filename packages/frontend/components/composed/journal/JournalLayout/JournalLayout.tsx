import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import JournalHero from "../JournalHero";
import { BreadcrumbsBar } from "components/layout";
import { JournalLayoutFragment$key } from "@/relay/JournalLayoutFragment.graphql";
import RelatedJournals from "components/composed/journal/RelatedJournals";
import EntityHTMLHead from "components/composed/entity/EntityHTMLHead";
import EntityNavBar from "components/composed/entity/EntityNavBar";

export default function JournalLayout({ data, children }: Props) {
  const journal = useMaybeFragment(fragment, data);

  return (
    <>
      <EntityHTMLHead data={journal} />
      <BreadcrumbsBar data={journal} />
      <JournalHero data={journal} />
      <EntityNavBar data={journal} />
      {children}
      <RelatedJournals data={journal?.related} />
    </>
  );
}

interface Props {
  data?: JournalLayoutFragment$key | null;
  children?: React.ReactNode;
}

const fragment = graphql`
  fragment JournalLayoutFragment on Collection {
    ...EntityHTMLHeadFragment
    ...JournalHeroFragment
    ...EntityNavBarFragment
    ...BreadcrumbsBarFragment
    related: links(order: RECENT, perPage: 4) {
      ...RelatedJournalsFragment
    }
  }
`;
