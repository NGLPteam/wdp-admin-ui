"use client";

import { graphql, useFragment } from "react-relay";
import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NamedLink } from "components/atomic";
import SkipLink from "components/global/SkipLink";
import { ArticleTabNavFragment$data } from "@/relay/ArticleTabNavFragment.graphql";
import { NavigationTabsFragment$key } from "@/relay/NavigationTabsFragment.graphql";
import { useSharedInlineFragment } from "@/components/templates/shared/shared.slots.graphql";
import type { TemplateSlotInlineInstance } from "@/types/graphql-schema";
import { getRouteByEntityType } from "@/helpers/routes";
import * as Styled from "./EntityNavigation.styles";

type Node = ArticleTabNavFragment$data["pages"]["edges"][number];

type Nav = Omit<ArticleTabNavFragment$data, " $fragmentType" | "schemaVersion">;

export default function NavigationTabs({
  data,
  skipToId,
}: {
  data?: NavigationTabsFragment$key | null;
  skipToId: string;
}) {
  const { slug } = useParams();
  const pathname = usePathname();
  const { t } = useTranslation();

  const template = useFragment(fragment, data);

  const { slots, entity } = template ?? {};

  const entityLabel = useSharedInlineFragment(slots?.entityLabel);

  if (!entity) return null;

  const basePath = `/${getRouteByEntityType(entity.__typename)}/${slug}`;

  function getLink(
    href: string,
    label?: TemplateSlotInlineInstance | string | null,
  ) {
    const isCurrent = pathname === href;

    const renderedLabel =
      typeof label === "string"
        ? t(label)
        : label?.valid
          ? label?.content
          : null;

    return renderedLabel ? (
      <Styled.Item key={href}>
        <NamedLink href={href} scroll={false}>
          <Styled.TabLink aria-current={isCurrent ? "page" : undefined}>
            {renderedLabel}
          </Styled.TabLink>
        </NamedLink>
      </Styled.Item>
    ) : null;
  }

  const nav: Nav = {
    assets: { pageInfo: { totalCount: 0 } },
    contributions: { pageInfo: { totalCount: 0 } },
    pages: { edges: [] },
  };

  return (
    <Styled.Nav
      className="l-container-wide"
      aria-label={t("nav.content_navigation_label")}
    >
      <SkipLink toId={skipToId} label={t("nav.skip_to_content")} />
      <Styled.List>
        {getLink(basePath, entityLabel)}
        {getLink(`${basePath}/metadata`, "nav.metadata")}
        {nav.assets?.pageInfo.totalCount > 0 &&
          getLink(`${basePath}/files`, "nav.files")}
        {nav.contributions?.pageInfo.totalCount > 0 &&
          getLink(`${basePath}/contributors`, "nav.contributors")}
        {entity.__typename === "Item" &&
          getLink(`${basePath}/metrics`, "nav.metrics")}
        {nav.pages && nav.pages.edges.length > 0
          ? nav.pages.edges.map(({ node }: Node) =>
              getLink(`${basePath}/page/${node.slug}`, node.title),
            )
          : null}
      </Styled.List>
    </Styled.Nav>
  );
}

const fragment = graphql`
  fragment NavigationTabsFragment on NavigationTemplateInstance {
    entity {
      ... on Item {
        __typename
        pages {
          edges {
            node {
              title
              slug
            }
          }
        }
        contributions {
          pageInfo {
            totalCount
          }
        }
        assets {
          pageInfo {
            totalCount
          }
        }
      }
      ... on Collection {
        __typename
        pages {
          edges {
            node {
              title
              slug
            }
          }
        }
        contributions {
          pageInfo {
            totalCount
          }
        }
        assets {
          pageInfo {
            totalCount
          }
        }
      }
      ... on Community {
        __typename
        pages {
          edges {
            node {
              title
              slug
            }
          }
        }
        assets {
          pageInfo {
            totalCount
          }
        }
      }
    }
    slots {
      entityLabel {
        ...sharedInlineSlotFragment
      }
    }
  }
`;
