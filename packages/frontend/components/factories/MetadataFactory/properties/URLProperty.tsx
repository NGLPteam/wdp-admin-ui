import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ExternalLink } from "components/atomic";
import { URLPropertyFragment$key } from "@/relay/URLPropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function URLProperty({ data, label, showPlaceholder }: Props) {
  const property = useMaybeFragment(fragment, data);

  return property?.url || (showPlaceholder && label) ? (
    <MetadataProperty label={label ?? property?.label ?? ""}>
      {property?.url && property.url.href && (
        <ExternalLink href={property.url.href || ""} className="t-copy">
          {property.url.title || property.url.label}
        </ExternalLink>
      )}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: URLPropertyFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment URLPropertyFragment on URLProperty {
    fullPath
    label
    url {
      label
      title
      href
    }
  }
`;
