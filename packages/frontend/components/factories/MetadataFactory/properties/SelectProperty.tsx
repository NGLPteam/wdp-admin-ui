import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { SelectPropertyFragment$key } from "@/relay/SelectPropertyFragment.graphql";
import { MetadataProperty } from "components/layout";

export default function SelectProperty({
  data,
  label,
  showPlaceholder,
}: Props) {
  const property = useMaybeFragment(fragment, data);

  const selectedOption = property?.options?.find(
    (o: { label: string; value: string }) => o.value === property.selection
  );

  return property || (showPlaceholder && label) ? (
    <MetadataProperty label={label ?? property?.label ?? ""}>
      {selectedOption ? selectedOption.value : "--"}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: SelectPropertyFragment$key | null;
  label?: string;
  showPlaceholder?: boolean;
}

const fragment = graphql`
  fragment SelectPropertyFragment on SelectProperty {
    fullPath
    label
    selection
    options {
      label
      value
    }
  }
`;
