import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { useSharedBlockFragment } from "@/components/templates/shared/shared.slots.graphql";
import { HeaderSidebarFragment$key } from "@/relay/HeaderSidebarFragment.graphql";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import DOI from "@/components/atomic/properties/DOI";
import ISSN from "@/components/atomic/properties/ISSN";
import DownloadCount from "@/components/atomic/properties/DownloadCount";
import ViewCount from "@/components/atomic/properties/ViewCount";
import styles from "./Header.module.css";

export default function Sidebar({
  data,
}: {
  data?: HeaderSidebarFragment$key | null;
}) {
  const template = useFragment(fragment, data);

  const { entity, definition, slots } = template ?? {};

  const slot = useSharedBlockFragment(slots?.headerSidebar);

  const { showDOI, showISSN, showBasicViewMetrics, showSplitDisplay } =
    definition ?? {};

  const shouldRender =
    (showDOI && !!entity?.doi) ||
    (showISSN && !!entity?.issn) ||
    showBasicViewMetrics ||
    slot?.valid;

  return shouldRender ? (
    <div
      className={classNames(styles.right, {
        [styles["right--split"]]: showSplitDisplay,
      })}
    >
      <ul className={classNames("t-label-sm", styles.sidebar)}>
        {showDOI && !showSplitDisplay && <DOI data={entity} />}
        {showISSN && <ISSN data={entity} />}
        {slot?.valid && !!slot.content && (
          <BlockSlotWrapper content={slot.content} />
        )}
        {showBasicViewMetrics && !showSplitDisplay && (
          <>
            <ViewCount data={entity?.entityViews} />
            <DownloadCount data={entity?.assetDownloads} />
          </>
        )}
      </ul>
    </div>
  ) : null;
}

const fragment = graphql`
  fragment HeaderSidebarFragment on HeroTemplateInstance {
    entity {
      ... on HasDOI {
        doi
      }
      ...DOIFragment
      ... on HasISSN {
        issn
      }
      ...ISSNFragment
      ... on Item {
        entityViews {
          ...ViewCountFragment
        }
        assetDownloads {
          ...DownloadCountFragment
        }
      }
      ... on Collection {
        entityViews {
          ...ViewCountFragment
        }
        assetDownloads {
          ...DownloadCountFragment
        }
      }
    }
    definition {
      showDOI
      showISSN
      showBasicViewMetrics
      showSplitDisplay
    }
    slots {
      headerSidebar {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
