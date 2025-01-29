import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import { DetailContentFragment$key } from "@/relay/DetailContentFragment.graphql";
import {
  useSharedBlockFragment,
  useSharedInlineFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import styles from "./Detail.module.css";

type DetailContentProps = {
  data?: DetailContentFragment$key | null;
};

export default function Content({ data }: DetailContentProps) {
  const template = useFragment(fragment, data);

  const { entity, slots, definition } = template ?? {};

  const subheader = useSharedInlineFragment(slots?.subheader);
  const subheaderAside = useSharedInlineFragment(slots?.subheaderAside);
  const metadata = useSharedInlineFragment(slots?.metadata);
  const summary = useSharedBlockFragment(slots?.subheaderSummary);
  const cta = useSharedBlockFragment(slots?.callToAction);

  return (
    <div>
      {(subheader?.valid || subheaderAside?.valid) && (
        <h2 className={classNames("t-h3", styles.subheader)}>
          {!!subheader?.content && (
            <InlineSlotWrapper content={subheader.content} />
          )}
          {!!subheaderAside?.content && (
            <span className={styles["subheader__aside"]}>
              <InlineSlotWrapper content={subheaderAside.content} />
            </span>
          )}
        </h2>
      )}
      {metadata?.valid && !!metadata?.content && (
        <span className={styles.metadata}>
          <InlineSlotWrapper content={metadata.content} />
        </span>
      )}
      <div className={styles.contributors}>
        {definition?.listContributors && (
          <ContributorsList
            className="t-copy-medium"
            data={entity}
            itemSlug={entity?.slug}
            filterRole="author"
          />
        )}
      </div>
      {summary?.valid && !!summary?.content && (
        <div className={styles.summary}>
          <BlockSlotWrapper content={summary.content} />
        </div>
      )}
      {cta?.valid && !!cta?.content && (
        <InlineSlotWrapper content={cta.content} />
      )}
    </div>
  );
}

const fragment = graphql`
  fragment DetailContentFragment on HeroTemplateInstance {
    entity {
      ... on Item {
        slug
        ...ContributorsListFragment
      }
    }
    definition {
      listContributors
    }
    slots {
      subheader {
        ...sharedInlineSlotFragment
      }
      subheaderAside {
        ...sharedInlineSlotFragment
      }
      subheaderSummary {
        ...sharedBlockSlotFragment
      }
      metadata {
        ...sharedInlineSlotFragment
      }
      callToAction {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
