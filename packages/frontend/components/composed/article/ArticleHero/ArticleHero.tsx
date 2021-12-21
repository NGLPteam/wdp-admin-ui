import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleHero.styles";
import { ArticleHeroFragment$key } from "@/relay/ArticleHeroFragment.graphql";
import { PrecisionDate } from "components/atomic";
import ContributorsList from "components/composed/contributor/ContributorsList";
import AssetDownloadButton from "components/composed/asset/AssetDownloadButton";

export default function ArticleHero({ data }: Props) {
  const article = useMaybeFragment(fragment, data);

  return article ? (
    <header className="a-bg-custom10">
      <Styled.HeroInner className="l-container-wide">
        <Styled.LeftSide>
          <Styled.TitleBlock>
            <h2>{article.title}</h2>
            <h4 className="t-copy-italic">Article Subtitle Goes Here</h4>
          </Styled.TitleBlock>
          <Styled.DataBlock>
            <ContributorsList
              className="t-copy-medium"
              data={article.contributions}
              itemSlug={article.slug}
            />
            <p className="t-copy-lighter">
              {article.published && (
                <PrecisionDate
                  data={article.published}
                  label="common.published"
                />
              )}
            </p>
          </Styled.DataBlock>
          {article.summary && (
            <Styled.Summary>{article.summary}</Styled.Summary>
          )}
          {article.pdfVersion && (
            <AssetDownloadButton data={article.pdfVersion} />
          )}
        </Styled.LeftSide>
        <Styled.RightSide className="t-label-sm">
          {article.doi && (
            <div>
              DOI: <span className="t-copy-light">{article.doi}</span>
            </div>
          )}
        </Styled.RightSide>
      </Styled.HeroInner>
    </header>
  ) : null;
}

interface Props {
  data?: ArticleHeroFragment$key | null;
}

const fragment = graphql`
  fragment ArticleHeroFragment on Item {
    slug
    title
    summary
    doi
    published {
      ...PrecisionDateFragment
    }
    contributions {
      ...ContributorsListFragment
    }
    pdfVersion: schemaProperty(fullPath: "pdf_version") {
      ...AssetDownloadButtonFragment
    }
  }
`;
