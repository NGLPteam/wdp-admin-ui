import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useTranslation } from "react-i18next";
import RelatedIssueBlock from "./RelatedIssueBlock";
import * as Styled from "./RelatedIssues.styles";
import { RelatedIssuesFragment$key } from "@/relay/RelatedIssuesFragment.graphql";

export default function RelatedIssues({ data }: Props) {
  const issues = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  return issues?.edges.length ? (
    <Styled.Outer className="a-bg-custom10">
      <Styled.Inner className="l-container-wide">
        <Styled.HeaderBlock>
          <Styled.HeaderText className="t-capitalize">
            {t("layouts.related_issues_header")}
          </Styled.HeaderText>
        </Styled.HeaderBlock>
        <Styled.List>
          {issues.edges.map((edge) => (
            <RelatedIssueBlock key={edge.node.slug} data={edge.node} />
          ))}
        </Styled.List>
      </Styled.Inner>
    </Styled.Outer>
  ) : null;
}

type Props = {
  data?: RelatedIssuesFragment$key | null;
};

const fragment = graphql`
  fragment RelatedIssuesFragment on CollectionConnection {
    edges {
      node {
        slug
        ...RelatedIssueBlockFragment
      }
    }
  }
`;
