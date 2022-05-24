import React, { useEffect, useRef, useState } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import * as Styled from "./ArticleTabNav.styles";
import {
  ArticleTabNavFragment$data,
  ArticleTabNavFragment$key,
} from "@/relay/ArticleTabNavFragment.graphql";
import { NamedLink } from "components/atomic";
import { RouteHelper } from "routes";

type Node = ArticleTabNavFragment$data["pages"]["edges"][number];

export default function ArticleTabNav({ data }: Props) {
  const nav = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const {
    query: { slug: slugQuery, page: pageQuery },
  } = useRouter();

  /** Scroll to the nav bar if the #nav hash is present */
  const navRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!nav || !navRef?.current || !window) return;

    const hash = window.location.hash;

    if (hash !== "#nav") return;

    navRef.current.scrollIntoView();
  }, [navRef, nav]);

  const slug = routeQueryArrayToString(slugQuery);

  const page = routeQueryArrayToString(pageQuery);

  const checkIfActive = (routeName: string, pageSlug?: string) => {
    const checkPage = !pageSlug || pageSlug === page;
    // Checking against the parent route (item) needs to be strict.
    // Child routes, such as files, can be fuzzy active.
    const checkRoute =
      routeName === "item" || pageSlug
        ? RouteHelper.isRouteNameActive(routeName)
        : RouteHelper.isRouteNameFuzzyActive(routeName);

    return checkRoute && checkPage;
  };

  function getLink(route: string, label: string, pageSlug?: string) {
    const isCurrent = checkIfActive(route, pageSlug);

    return slug ? (
      <Styled.Item key={route === "item.page" ? pageSlug : route}>
        <NamedLink
          route={route}
          routeParams={pageSlug ? { slug, page: pageSlug } : { slug }}
          passHref
          hash="nav"
        >
          <Styled.TabLink aria-current={isCurrent ? "page" : undefined}>
            {t(label)}
          </Styled.TabLink>
        </NamedLink>
      </Styled.Item>
    ) : null;
  }

  return nav ? (
    <Styled.Nav className="l-container-wide" ref={navRef} id="nav">
      <Styled.List>
        {getLink(
          "item",
          nav.schemaVersion?.identifier === "journal_article"
            ? "nav.article"
            : "nav.full_text"
        )}
        {getLink("item.metadata", "nav.metadata")}
        {nav.assets?.pageInfo.totalCount > 0 &&
          getLink("item.files", "nav.files")}
        {nav.contributions?.pageInfo.totalCount > 0 &&
          getLink("item.contributors", "nav.contributors")}
        {/* {getLink("item.metrics", "Metrics")} */}
        {nav.pages && nav.pages.edges.length > 0
          ? nav.pages.edges.map(({ node }: Node) =>
              getLink("item.page", node.title, node.slug)
            )
          : null}
      </Styled.List>
    </Styled.Nav>
  ) : null;
}

interface Props {
  data?: ArticleTabNavFragment$key | null;
}

const fragment = graphql`
  fragment ArticleTabNavFragment on Item {
    schemaVersion {
      identifier
      name
    }
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
`;
