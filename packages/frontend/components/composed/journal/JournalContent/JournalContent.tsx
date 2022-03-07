import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import FeaturedIssue from "../FeaturedIssue";
import * as Styled from "./JournalContent.styles";
import { FullText } from "components/atomic";
import RecentIssues from "components/composed/issue/RecentIssues";
import { JournalContentFragment$key } from "@/relay/JournalContentFragment.graphql";
import EntityAnnouncements from "components/composed/entity/EntityAnnouncements";

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
          {!!journal.announcements && (
            <Styled.AnnouncementsBlock>
              <EntityAnnouncements data={journal.announcements} />
            </Styled.AnnouncementsBlock>
          )}
        </Styled.SectionInner>
      </section>
      <FeaturedIssue
        data={journal.currentIssue}
        header="layouts.current_issue"
      />
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
      ...FeaturedIssueFragment
    }

    announcements {
      ...EntityAnnouncementsFragment
    }
  }
`;
