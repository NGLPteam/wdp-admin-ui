import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import * as Styled from "./IssueHero.styles";
import { IssueHeroFragment$key } from "@/relay/IssueHeroFragment.graphql";
import CoverImage from "components/atomic/CoverImage";
import { DotList, PrecisionDate, DOI } from "components/atomic";
import AssetDownloadButton from "components/composed/asset/AssetDownloadButton";
import JournalHeroCompact from "components/composed/journal/JournalHeroCompact";
import JournalHeroMetadata from "components/composed/journal/JournalHeroMetadata";

export default function IssueHero({ data }: Props) {
  const issue = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return issue ? (
    <header className="a-bg-custom10">
      <JournalHeroCompact data={issue.journal} />
      <Styled.HeroInner className="l-container-wide">
        <Styled.TextBlock>
          {issue.thumbnail?.storage && (
            <Styled.Cover>
              <CoverImage
                id={issue.id}
                title={issue.title}
                data={issue.thumbnail}
                maxWidth={225}
                maxHeight={300}
              />
            </Styled.Cover>
          )}
          <Styled.Issue>
            <Styled.Title as="h3">{issue.title}</Styled.Title>
            {issue.volume && (
              <Styled.Volume>{issue.volume.title}</Styled.Volume>
            )}
            <Styled.Description>
              {issue.volume && (
                <Styled.VolumeMobile>{issue.volume.title}</Styled.VolumeMobile>
              )}
              <DotList className="t-copy-lighter">
                {issue.published && (
                  <li>
                    <PrecisionDate
                      data={issue.published}
                      label={t("common.published")}
                    />
                  </li>
                )}
              </DotList>
              {issue.summary && <p>{issue.summary}</p>}
            </Styled.Description>
            {issue.pdfVersion && (
              <AssetDownloadButton data={issue.pdfVersion} />
            )}
          </Styled.Issue>
        </Styled.TextBlock>
        <Styled.MetadataBlock className="t-label-sm">
          <DOI data={issue} />
          <JournalHeroMetadata data={issue.journal} />
        </Styled.MetadataBlock>
      </Styled.HeroInner>
    </header>
  ) : null;
}

interface Props {
  data?: IssueHeroFragment$key | null;
}

const fragment = graphql`
  fragment IssueHeroFragment on Collection {
    id
    title
    subtitle
    summary
    ...DOIFragment
    published {
      ...PrecisionDateFragment
    }
    thumbnail {
      storage
      ...CoverImageFragment
    }
    journal: ancestorOfType(schema: "nglp:journal") {
      ...JournalHeroCompactFragment
      ...JournalHeroMetadataFragment
    }
    volume: ancestorOfType(schema: "nglp:journal_volume") {
      ... on Entity {
        title
      }
    }
    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ...AssetDownloadButtonFragment
    }
  }
`;
