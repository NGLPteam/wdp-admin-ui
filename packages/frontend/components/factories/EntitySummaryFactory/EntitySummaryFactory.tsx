import { graphql, readInlineData } from "relay-runtime";
import IssueSummary from "@/components/composed/summary/IssueSummary";
import ArticleSummary from "@/components/composed/summary/ArticleSummary";
import EntitySummary from "@/components/composed/summary/EntitySummary";
import VolumeSummary from "@/components/composed/summary/VolumeSummary";
import JournalSummary from "@/components/composed/summary/JournalSummary";
import DissertationSummary from "@/components/composed/summary/DissertationSummary";
import { EntitySummaryFactoryFragment$key } from "@/relay/EntitySummaryFactoryFragment.graphql";

export default function EntitySummaryFactory({ data, ...props }: Props) {
  const entity = readInlineData(fragment, data);

  if (!entity) return null;

  switch (entity.schemaDefinition?.identifier) {
    case "journal_article":
      return <ArticleSummary data={entity} {...props} />;

    case "dissertation":
    case "paper":
      return <DissertationSummary data={entity} {...props} />;

    case "journal_issue":
      return <IssueSummary data={entity} {...props} />;

    case "journal_volume":
      return <VolumeSummary data={entity} {...props} />;

    case "journal":
      return <JournalSummary data={entity} {...props} />;

    case "series":
    case "unit":
    default:
      return <EntitySummary data={entity} {...props} />;
  }
}

interface Props {
  data: EntitySummaryFactoryFragment$key | null;
}

const fragment = graphql`
  fragment EntitySummaryFactoryFragment on Entity
  @inline
  @argumentDefinitions(showJournal: { type: "Boolean", defaultValue: false }) {
    schemaDefinition {
      identifier
    }
    ...EntitySummaryFragment
    ...ArticleSummaryFragment @arguments(showJournal: $showJournal)
    ...IssueSummaryFragment @arguments(showJournal: $showJournal)
    ...VolumeSummaryFragment @arguments(showJournal: $showJournal)
    ...JournalSummaryFragment
    ...DissertationSummaryFragment
  }
`;
