import { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@wdp/lib/hooks";
import NamedLink from "@/components/atomic/links/NamedLink";
import { ContributorsListFragment$key } from "@/relay/ContributorsListFragment.graphql";
import ContributorName from "../ContributorName";
import styles from "./ContributorsList.module.css";

export default function ContributorsList({
  data,
  className,
  itemSlug,
  collectionSlug,
  filterRole,
  noLinks = false,
}: Props) {
  const { attributions } = useFragment(fragment, data) ?? {};

  const { t } = useTranslation();

  const size = useWindowSize();

  const limit = useMemo(() => {
    if (!size?.width) return 4;

    return size.width < 541 ? 2 : size.width < 769 ? 3 : 4;
  }, [size]);

  const filtered = attributions?.filter(
    (node) =>
      !filterRole ||
      (!!node.roles.length &&
        node.roles.find(
          (r) => r.label.toLowerCase() === filterRole.toLowerCase(),
        )),
  );

  return filtered?.length ? (
    <span className={className}>
      {filtered.slice(0, limit).map(({ contributor }, i: number) => {
        const _params = new URLSearchParams({
          ...(itemSlug && { item: itemSlug }),
          ...(collectionSlug && {
            collection: collectionSlug,
          }),
        });
        // const href = contributor.slug
        //   ? `/contributors/${contributor.slug}?${params.toString()}`
        //   : "#";

        const href = "#";

        return (
          <span className={styles.item} key={i}>
            {href && !noLinks ? (
              <>
                <NamedLink href={href}>
                  <ContributorName data={contributor} />
                </NamedLink>
              </>
            ) : (
              <>
                <ContributorName data={contributor} />
              </>
            )}
          </span>
        );
      })}
      {attributions?.length && attributions?.length > limit && (
        <>{t("list.and_x_more", { count: attributions.length - limit })}</>
      )}
    </span>
  ) : null;
}

interface Props {
  data?: ContributorsListFragment$key | null;
  label?: string;
  className?: string;
  /** Pass this in to add the parent item's slug to the contributor route */
  itemSlug?: string;
  /** Pass this in to add the parent collection's slug to the contributor route */
  collectionSlug?: string;
  /** Filter by a role, such as 'author' */
  filterRole?: string;
  noLinks?: boolean;
}

const fragment = graphql`
  fragment ContributorsListFragment on AnyEntity {
    ... on Item {
      attributions {
        slug
        roles {
          label
        }
        contributor {
          ...ContributorNameFragment
        }
      }
    }
    ... on Collection {
      attributions {
        slug
        roles {
          label
        }
        contributor {
          ...ContributorNameFragment
        }
      }
    }
  }
`;
