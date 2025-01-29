"use client";

import { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { ContributionsBlockFragment$key } from "@/relay/ContributionsBlockFragment.graphql";
import Contributor from "@/components/templates/Contributors/Contributor";
import BaseContributionsBlock from "./BaseContributionsBlock";

type BaseProps = Omit<
  React.ComponentProps<typeof BaseContributionsBlock>,
  "children"
>;

const ContributionsBlock = ({ data, filterRole, ...baseProps }: Props) => {
  const { attributions } = useFragment(fragment, data) ?? {};

  const showAvatars = useMemo(() => {
    return attributions?.some((node) => node.contributor?.image?.storage);
  }, [attributions]);

  const filtered = attributions?.filter(
    (node) =>
      !filterRole ||
      (!!node.roles.length &&
        node.roles.find(
          (r) => r.label.toLowerCase() === filterRole.toLowerCase(),
        )),
  );

  return (
    <BaseContributionsBlock {...baseProps}>
      {filtered?.length
        ? filtered.map((node) => (
            <Contributor data={node} key={node.slug} showAvatar={showAvatars} />
          ))
        : null}
    </BaseContributionsBlock>
  );
};

interface Props extends BaseProps {
  data?: ContributionsBlockFragment$key | null;
  /** Filter by a role, example: author */
  filterRole?: string;
}

export default ContributionsBlock;

const fragment = graphql`
  fragment ContributionsBlockFragment on Item {
    attributions {
      slug
      roles {
        label
      }
      contributor {
        image {
          storage
        }
      }
      ...ContributorFragment
    }
  }
`;
