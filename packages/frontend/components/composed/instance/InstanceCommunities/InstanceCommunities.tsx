import * as React from "react";
import { graphql, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import InstanceCommunitySummary from "../InstanceCommunitySummary/InstanceCommunitySummary";
import * as Styled from "./InstanceCommunities.styles";
import {
  InstanceCommunitiesFragment$data,
  InstanceCommunitiesFragment$key,
} from "@/relay/InstanceCommunitiesFragment.graphql";

export default function InstanceCommunities({ data }: Props) {
  const communities = useFragment(fragment, data);

  const { t } = useTranslation();

  return communities.edges?.length > 0 ? (
    <section className="a-bg-netural00">
      <Styled.Inner className="l-container-wide">
        <Styled.Header as="h3">
          {t("layouts.instance_communities_header")}
        </Styled.Header>
        <Styled.List>
          {communities.edges.map(({ node }: Node) => (
            <Styled.Item key={node.slug}>
              <InstanceCommunitySummary data={node} />
            </Styled.Item>
          ))}
        </Styled.List>
      </Styled.Inner>
    </section>
  ) : null;
}

type Node = InstanceCommunitiesFragment$data["edges"][number];

type Props = {
  data: InstanceCommunitiesFragment$key;
};

const fragment = graphql`
  fragment InstanceCommunitiesFragment on CommunityConnection {
    edges {
      node {
        slug
        ...InstanceCommunitySummaryFragment
      }
    }
  }
`;