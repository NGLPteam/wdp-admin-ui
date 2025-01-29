import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import capitalize from "lodash/capitalize";
import { ContributorsTemplateFragment$key } from "@/relay/ContributorsTemplateFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import Container from "@/components/layout/Container";
import Contributor from "./Contributor";
import styles from "./Contributors.module.css";

export default function ContributorsTemplate({
  data,
}: {
  data?: ContributorsTemplateFragment$key | null;
}) {
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { entity, contributorsDefinition, slots } = template ?? {};

  const { background, width, limit } = contributorsDefinition ?? {};

  const header = useSharedInlineFragment(slots?.header);

  if (!template || !entity) return null;

  const mdxHeader = header?.valid && !!header.content;

  const attributions =
    entity.__typename !== "%other" ? entity.attributions : [];

  const shouldRender = !!attributions?.length;

  const renderedContributors =
    limit && typeof limit === "number"
      ? attributions?.slice(0, limit)
      : attributions;

  const backParams =
    entity.__typename !== "%other"
      ? new URLSearchParams({
          ...(entity?.slug && {
            [entity.__typename.toLowerCase()]: entity.slug,
          }),
        })
      : new URLSearchParams();

  return shouldRender ? (
    <Container
      className={styles.container}
      bgColor={background}
      halfWidthTemplate={width === "HALF"}
    >
      <h3 className={styles?.testClass}>
        {mdxHeader ? (
          <InlineSlotWrapper content={header.content} />
        ) : (
          capitalize(t("glossary.contributor_other"))
        )}
      </h3>
      <ul className={styles.list}>
        {renderedContributors?.map((c, i) => (
          <Contributor key={i} data={c} backParams={backParams} />
        ))}
      </ul>
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment ContributorsTemplateFragment on ContributorListTemplateInstance {
    __typename
    entity {
      ... on Item {
        __typename
        slug
        attributions {
          ...ContributorFragment
        }
      }
      ... on Collection {
        __typename
        slug
        attributions {
          ...ContributorFragment
        }
      }
    }
    contributorsDefinition: definition {
      background
      limit
      width
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
