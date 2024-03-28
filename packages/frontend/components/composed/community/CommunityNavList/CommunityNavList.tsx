import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { useRoutePageSlug } from "@wdp/lib/routes";
import {
  Dropdown,
  NamedLink,
  Accordion,
  NavMenuLink,
  Link,
} from "components/atomic";
import { getSchemaTranslationKey } from "helpers";
import { CommunityNavListFragment$key } from "@/relay/CommunityNavListFragment.graphql";
import * as Styled from "./CommunityNavList.styles";

export default function CommunityNavList({ condensed, mobile, data }: Props) {
  const { t } = useTranslation();

  const community = useMaybeFragment(fragment, data);

  const page = useRoutePageSlug();

  const linkClassName = condensed ? "t-label-sm" : "t-label-lg";

  const ListComponent = mobile ? Styled.MobileNavList : Styled.NavList;

  function getDisclosure(label: string) {
    return (
      <NavMenuLink as="div" icon="chevronDown">
        <span className={linkClassName}>{t(label)}</span>
      </NavMenuLink>
    );
  }

  const schemaLinks =
    community && community.slug
      ? community.schemaRanks.map((schema) => (
          <NamedLink
            key={schema.slug}
            route={
              schema.kind === "COLLECTION"
                ? "community.collections.schema"
                : "community.items.schema"
            }
            routeParams={{
              slug: community.slug,
              schema: encodeURIComponent(schema.slug),
            }}
          >
            <Link as="span">
              {t(getSchemaTranslationKey(schema.slug), { count: 2 })}
            </Link>
          </NamedLink>
        ))
      : [];

  const exploreMenu = mobile ? (
    <Accordion label={t("nav.explore")} menuItems={schemaLinks} />
  ) : (
    <Dropdown
      disclosure={getDisclosure("nav.explore")}
      label={t("nav.explore")}
      menuItems={schemaLinks}
    />
  );

  return community ? (
    <ListComponent $condensed={condensed}>
      {schemaLinks.length > 0 && (
        <li className="t-capitalize">{exploreMenu}</li>
      )}
      {community.slug &&
        community.pages.edges &&
        community.pages.edges.map(({ node }) => (
          <li key={node.slug}>
            <NamedLink
              href={`/communities/${community.slug}/page/${node.slug}`}
              aria-current={page === node.slug ? "page" : undefined}
            >
              <NavMenuLink as="span">
                <span className={linkClassName}>{node.title}</span>
              </NavMenuLink>
            </NamedLink>
          </li>
        ))}
    </ListComponent>
  ) : null;
}

interface Props {
  condensed?: boolean;
  mobile?: boolean;
  data?: CommunityNavListFragment$key | null;
}

const fragment = graphql`
  fragment CommunityNavListFragment on Community {
    slug
    schemaRanks {
      slug
      name
      count
      kind
    }
    pages {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
