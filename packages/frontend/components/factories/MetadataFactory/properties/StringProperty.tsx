import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { StringPropertyFragment$key } from "@/relay/StringPropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function StringProperty({ data, label }: Props) {
  const property = useMaybeFragment(fragment, data);

  return property ? (
    <MetadataProperty label={label || property.label}>
      {property.content}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: StringPropertyFragment$key | null;
  label?: string;
}

const fragment = graphql`
  fragment StringPropertyFragment on StringProperty {
    fullPath
    label
    content
  }
`;