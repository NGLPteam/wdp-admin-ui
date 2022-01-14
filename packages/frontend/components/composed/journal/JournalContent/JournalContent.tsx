import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import CurrentIssue from "../CurrentIssue";
import * as Styled from "./JournalContent.styles";
import { ReadMoreLink, FullText, NamedLink } from "components/atomic";
import RecentIssues from "components/composed/issue/RecentIssues";
import { JournalContentFragment$key } from "@/relay/JournalContentFragment.graphql";

export default function JournalContent({ data }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const journal = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  if (!journal) return null;

  return (
    <>
      <section className="a-bg-custom10">
        <Styled.SectionInner className="l-container-wide">
          {journal.about?.fullText?.content && (
            <Styled.InfoBlock className="t-rte">
              <FullText data={journal.about} />
            </Styled.InfoBlock>
          )}
          {!!journal.announcements.edges.length && (
            <Styled.AnnouncementsBlock as="aside" className="a-bg-neutral00">
              <Styled.AnnouncementsHeader>
                {t("layouts.announcements_header")}
              </Styled.AnnouncementsHeader>
              <ul className="t-unstyled-list">
                {journal.announcements.edges.map((announcement) => (
                  <Styled.AnnouncementItem key={announcement.node.slug}>
                    <h5 className="t-copy-medium">
                      <NamedLink
                        route="collection.announcement"
                        routeParams={{
                          slug: journal.slug,
                          announcement: announcement.node.slug,
                        }}
                        passHref
                      >
                        <a>{announcement.node.header}</a>
                      </NamedLink>
                    </h5>
                    <Styled.AnnouncementBody className="t-rte">
                      <p>{announcement.node.teaser}</p>
                    </Styled.AnnouncementBody>
                    <NamedLink
                      route="collection.announcement"
                      routeParams={{
                        slug: journal.slug,
                        announcement: announcement.node.slug,
                      }}
                      passHref
                    >
                      <ReadMoreLink className="t-label-mix" />
                    </NamedLink>
                  </Styled.AnnouncementItem>
                ))}
              </ul>
            </Styled.AnnouncementsBlock>
          )}
        </Styled.SectionInner>
      </section>
      <CurrentIssue data={journal.currentIssue} />
      <RecentIssues data={journal.issues} />
    </>
  );
}

interface Props {
  data?: JournalContentFragment$key | null;
}

const fragment = graphql`
  fragment JournalContentFragment on Collection {
    title
    slug

    about: schemaProperty(fullPath: "description") {
      ... on FullTextProperty {
        fullText {
          content
        }
      }
      ...FullTextFragment
    }

    issues: collections(
      schema: "nglp:journal_issue"
      order: PUBLISHED_DESCENDING
      nodeFilter: DESCENDANTS
      page: 1
      perPage: 4
    ) {
      ...RecentIssuesFragment
    }

    currentIssue: firstCollection(
      schema: "nglp:journal_issue"
      order: PUBLISHED_DESCENDING
      nodeFilter: DESCENDANTS
    ) {
      ...CurrentIssueFragment
    }

    announcements {
      edges {
        node {
          teaser
          header
          slug
        }
      }
    }
  }
`;
