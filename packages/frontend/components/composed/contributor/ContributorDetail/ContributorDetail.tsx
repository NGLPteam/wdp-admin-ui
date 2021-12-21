import React, { useMemo } from "react";
import { graphql } from "react-relay";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import get from "lodash/get";
import ContributorName from "../ContributorName";
import ContributorAvatar from "../ContributorAvatar";
import * as Styled from "./ContributorDetail.styles";
import ContributionItem from "./ContributionItem/ContributionItem";
import { ExternalLink } from "components/atomic";
import { ContributorDetailFragment$key } from "@/relay/ContributorDetailFragment.graphql";
import { BackToTopBlock } from "components/layout";

export default function ContributorDetail({ data }: Props) {
  const contributor = useMaybeFragment(fragment, data);
  const { t } = useTranslation();

  const contributionCount = useMemo(
    () =>
      get(contributor, "collectionContributionCount", 0) +
      get(contributor, "itemContributionCount", 0),
    [contributor]
  );

  return contributor ? (
    <>
      <section className="a-bg-custom10">
        <Styled.ContributorWrapper className="l-container-wide">
          <Styled.NameHeader as="header">
            {contributor.image?.storage && (
              <ContributorAvatar data={contributor.image} />
            )}
            <h3>
              <ContributorName data={contributor} />
            </h3>
          </Styled.NameHeader>
          {contributor.title && (
            <p className="t-label-lg">{contributor.title}</p>
          )}
          {contributor.affiliation && (
            <p className="t-copy-lighter">{contributor.affiliation}</p>
          )}
          {contributor.bio && (
            <div className="t-copy-light">
              <ReactMarkdown>{contributor.bio}</ReactMarkdown>
            </div>
          )}
          {contributor.links && contributor.links.length > 0 && (
            <ul className="t-label-sm">
              {contributor.links.map(({ title, url }, i) => (
                <li key={i}>
                  <ExternalLink href={url}>{title}</ExternalLink>
                </li>
              ))}
            </ul>
          )}
        </Styled.ContributorWrapper>
      </section>
      {contributionCount > 0 && (
        <section className="l-container-wide">
          <Styled.ContributionsWrapper
            as={contributionCount > 6 ? BackToTopBlock : "div"}
          >
            <Styled.ContributionsHeader>
              {t("layouts.contributions_header")}
            </Styled.ContributionsHeader>
            <Styled.ContributionList>
              {contributor.collectionContributions.nodes.map(
                ({ collection }, i) => (
                  <Styled.ContributionItem key={i}>
                    <ContributionItem data={collection} />
                  </Styled.ContributionItem>
                )
              )}
              {contributor.itemContributions.nodes.map(({ item }, i) => (
                <Styled.ContributionItem key={i}>
                  <ContributionItem data={item} />
                </Styled.ContributionItem>
              ))}
            </Styled.ContributionList>
          </Styled.ContributionsWrapper>
        </section>
      )}
    </>
  ) : null;
}

interface Props {
  data?: ContributorDetailFragment$key | null;
  backRoute?: string;
  backLabel?: string;
}

const fragment = graphql`
  fragment ContributorDetailFragment on Contributor {
    ...ContributorNameFragment
    ... on Contributor {
      bio
      collectionContributionCount
      collectionContributions {
        nodes {
          role
          collection {
            ...ContributionItemFragment
          }
        }
      }
      itemContributionCount
      itemContributions {
        nodes {
          role
          item {
            ...ContributionItemFragment
          }
        }
      }
      image {
        storage
        ...ContributorAvatarFragment
      }
      links {
        title
        url
      }
    }
    ... on PersonContributor {
      affiliation
      title
    }
  }
`;
