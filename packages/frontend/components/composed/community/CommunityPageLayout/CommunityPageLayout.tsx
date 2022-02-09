import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import * as Styled from "./CommunityPageLayout.styles";
import { HeroImage } from "components/atomic";
import { CommunityPageLayoutFragment$key } from "@/relay/CommunityPageLayoutFragment.graphql";

export default function CommunityPageLayout({ data }: Props) {
  const page = useMaybeFragment(fragment, data);

  return page ? (
    <section className="a-bg-custom10">
      <HeroImage data={page.heroImage} metadata={page.heroImageMetadata} />
      <div className="l-container-wide">
        <Styled.Content className="t-rte">
          <h2>{page.title}</h2>
          <ReactMarkdown>{page.body}</ReactMarkdown>
        </Styled.Content>
      </div>
    </section>
  ) : null;
}

interface Props {
  data?: CommunityPageLayoutFragment$key | null;
}

const fragment = graphql`
  fragment CommunityPageLayoutFragment on Page {
    title
    body
    heroImage {
      ...HeroImageFragment
    }
    heroImageMetadata {
      ...HeroImageMetadataFragment
    }
  }
`;
