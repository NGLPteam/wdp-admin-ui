import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import IssueHero from "../IssueHero";
import { BreadcrumbsBar } from "components/layout";
import { IssueLayoutFragment$key } from "@/relay/IssueLayoutFragment.graphql";

export default function IssueLayout({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  return (
    <>
      <BreadcrumbsBar data={issue} />
      <IssueHero data={issue} />
    </>
  );
}

interface Props {
  data?: IssueLayoutFragment$key | null;
}

const fragment = graphql`
  fragment IssueLayoutFragment on Collection {
    ...BreadcrumbsBarFragment
    ...IssueHeroFragment
  }
`;