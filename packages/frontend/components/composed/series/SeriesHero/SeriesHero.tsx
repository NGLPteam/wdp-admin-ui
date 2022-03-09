import React from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./SeriesHero.styles";
import { ContentImage, PrecisionDate } from "components/atomic";
import { SeriesHeroFragment$key } from "@/relay/SeriesHeroFragment.graphql";
import ArticleParentHeader from "components/composed/article/ArticleParentHeader";

export default function SeriesHero({ data }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return entity ? (
    <>
      <ArticleParentHeader data={entity} />
      <header className="a-bg-custom10">
        <Styled.HeroInner className="l-container-wide">
          <Styled.LeftSide>
            <Styled.TitleBlock>
              <h2>{entity.title}</h2>
              {entity.subtitle && (
                <h4 className="t-copy-italic">{entity.subtitle}</h4>
              )}
            </Styled.TitleBlock>
            <Styled.DataBlock>
              {entity.published?.value && (
                <p className="t-copy-lighter">
                  <PrecisionDate
                    data={entity.published}
                    label="common.published"
                  />
                </p>
              )}
            </Styled.DataBlock>
            {entity.about && (
              <Styled.Summary aria-label={t("glossary.abstract")}>
                <p>{entity.about.content}</p>
              </Styled.Summary>
            )}
          </Styled.LeftSide>
          <Styled.RightSide className="t-label-sm">
            {entity.thumbnail.storage && (
              <Styled.ImageWrapper>
                <ContentImage data={entity.thumbnail} />
              </Styled.ImageWrapper>
            )}
          </Styled.RightSide>
        </Styled.HeroInner>
      </header>
    </>
  ) : null;
}

interface Props {
  data?: SeriesHeroFragment$key | null;
}

const fragment = graphql`
  fragment SeriesHeroFragment on Collection {
    slug
    title
    subtitle
    summary

    published {
      ...PrecisionDateFragment
      value
    }

    about: schemaProperty(fullPath: "about") {
      ... on MarkdownProperty {
        content
      }
    }

    ...ArticleParentHeaderFragment

    thumbnail {
      storage
      ...ContentImageFragment
    }
  }
`;
