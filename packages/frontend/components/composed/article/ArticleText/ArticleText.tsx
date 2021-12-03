import React, { useMemo } from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import * as Styled from "./ArticleText.styles";
import { ArticleTextFragment$key } from "@/relay/ArticleTextFragment.graphql";
import { ContentImage } from "components/atomic";

export default function ArticleText({ data }: Props) {
  const article = useMaybeFragment(fragment, data);
  const body = useMemo(
    () => article?.properties.find((p) => p.fullPath === "body"),
    [article]
  );

  return article ? (
    <Styled.BodyWrapper>
      <Styled.TextBlock>
        <Styled.ImageBlock>
          <ContentImage data={article.thumbnail} />
        </Styled.ImageBlock>
        {body?.fullText &&
          (body.fullText.content && body.fullText.kind === "HTML" ? (
            <div
              className="t-rte"
              dangerouslySetInnerHTML={{ __html: body.fullText.content }}
            />
          ) : (
            body.fullText.content && (
              <ReactMarkdown className="t-rte">
                {body.fullText.content}
              </ReactMarkdown>
            )
          ))}
      </Styled.TextBlock>
      <Styled.TOCBlock>
        <Styled.TOCHeader className="t-label-sm t-copy-light">
          Table of Contents
        </Styled.TOCHeader>
        <Styled.TOCList>
          <Styled.TOCListItem>Example Item</Styled.TOCListItem>
          <Styled.TOCListItem>Example Item</Styled.TOCListItem>
        </Styled.TOCList>
      </Styled.TOCBlock>
    </Styled.BodyWrapper>
  ) : null;
}

interface Props {
  data?: ArticleTextFragment$key | null;
}

const fragment = graphql`
  fragment ArticleTextFragment on Item {
    thumbnail {
      ...ContentImageFragment
    }
    properties: schemaProperties {
      ... on FullTextProperty {
        fullPath
        fullText {
          content
          kind
          lang
        }
        type
        label
      }
    }
  }
`;
