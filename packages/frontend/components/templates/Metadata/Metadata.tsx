"use client";

import { PropsWithChildren } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { MetadataTemplateFragment$key } from "@/relay/MetadataTemplateFragment.graphql";
import {
  useSharedInlineFragment,
  useSharedBlockFragment,
} from "@/components/templates/shared/shared.slots.graphql";
import InlineSlotWrapper from "@/components/templates/mdx/InlineSlotWrapper";
import BlockSlotWrapper from "@/components/templates/mdx/BlockSlotWrapper";
import Container from "@/components/layout/Container";
import styles from "./Metadata.module.css";

export default function MetadataTemplate({
  data,
}: PropsWithChildren & { data?: MetadataTemplateFragment$key | null }) {
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { definition, slots } = template ?? {};

  const header = useSharedInlineFragment(slots?.header);
  const itemsA = useSharedBlockFragment(slots?.itemsA);
  const itemsB = useSharedBlockFragment(slots?.itemsB);
  const itemsC = useSharedBlockFragment(slots?.itemsC);
  const itemsD = useSharedBlockFragment(slots?.itemsD);

  const canRender =
    itemsA?.valid || itemsB?.valid || itemsC?.valid || itemsD?.valid;

  return canRender ? (
    <Container className={styles.container} bgColor={definition?.background}>
      <h3>
        {header?.valid ? (
          <InlineSlotWrapper content={header.content} />
        ) : (
          t("metadata.header")
        )}
      </h3>
      <dl className={styles.list}>
        {itemsA?.valid && (
          <div className={styles.column}>
            <BlockSlotWrapper content={itemsA.content} />
          </div>
        )}
        {itemsB?.valid && (
          <div className={styles.column}>
            <BlockSlotWrapper content={itemsB.content} />
          </div>
        )}
        {itemsC?.valid && (
          <div className={styles.column}>
            <BlockSlotWrapper content={itemsC.content} />
          </div>
        )}
        {itemsD?.valid && (
          <div className={styles.column}>
            <BlockSlotWrapper content={itemsD.content} />
          </div>
        )}
      </dl>
    </Container>
  ) : null;
}

const fragment = graphql`
  fragment MetadataTemplateFragment on MetadataTemplateInstance {
    definition {
      background
    }
    slots {
      header {
        ...sharedInlineSlotFragment
      }
      itemsA {
        ...sharedBlockSlotFragment
      }
      itemsB {
        ...sharedBlockSlotFragment
      }
      itemsC {
        ...sharedBlockSlotFragment
      }
      itemsD {
        ...sharedBlockSlotFragment
      }
    }
  }
`;
