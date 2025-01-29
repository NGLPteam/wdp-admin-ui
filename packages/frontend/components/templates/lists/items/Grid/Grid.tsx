import classNames from "classnames";
import CoverImage from "@/components/atomic/images/CoverImage";
import { useSharedListItemTemplateFragment } from "@/components/templates/shared/shared.listItems.graphql";
import { sharedListItemTemplateFragment$key } from "@/relay/sharedListItemTemplateFragment.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import ContributorsList from "@/components/composed/contributor/ContributorsList";
import NamedLink from "@/components/atomic/links/NamedLink";
import { getRouteByEntityType } from "@/helpers/routes";
import styles from "./Grid.module.css";

export default function GridListItem({
  data,
  showContributors,
  showContext,
}: {
  data?: sharedListItemTemplateFragment$key | null;
  hideCover?: boolean;
  showContributors?: boolean | null;
  showContext?: boolean | null;
}) {
  const { slots, entity } = useSharedListItemTemplateFragment(data);

  const { header, subheader, contextFull, metaA, metaB } = slots ?? {};

  const renderMeta = metaA?.valid || metaB?.valid;

  if (!(entity?.__typename === "Item" || entity?.__typename === "Collection"))
    return null;

  const href = `/${getRouteByEntityType(entity?.__typename)}/${entity.slug}`;

  const showCover = entity?.__typename === "Collection";

  const renderContributors =
    showContributors && !!entity.contributors?.pageInfo.totalCount;

  const renderContext = showContext &&
    contextFull?.valid &&
    !!contextFull.content && (
      <span className={styles.contextOne}>
        <InlineSlotWrapper content={contextFull.content} />
      </span>
    );

  return (
    <li>
      <NamedLink className={styles.link} href={href}>
        {showCover && <CoverImage {...entity} maxWidth={168} maxHeight={248} />}
        <div className={styles.text}>
          {showCover && renderContext}
          {header?.valid && !!header.content && (
            <h4 className={styles.header}>
              <span className="has-focus-styles">
                <InlineSlotWrapper content={header.content} />
              </span>
            </h4>
          )}
          {subheader?.valid && !!subheader.content && (
            <span className={classNames(styles.subheader, "has-focus-styles")}>
              <InlineSlotWrapper content={subheader.content} />
            </span>
          )}
          {renderContributors && (
            <span className={styles.contributors}>
              <ContributorsList data={entity} noLinks />
            </span>
          )}
          {renderMeta && (
            <div className={styles.group}>
              {!showCover && renderContext}
              {metaA?.valid && !!metaA.content && (
                <InlineSlotWrapper content={metaA.content} />
              )}
              {metaB?.valid && <InlineSlotWrapper content={metaB.content} />}
            </div>
          )}
        </div>
      </NamedLink>
    </li>
  );
}
