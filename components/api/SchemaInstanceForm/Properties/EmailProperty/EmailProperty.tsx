import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import { Email } from "components/forms/Input";
import type { EmailPropertyFragment$key } from "@/relay/EmailPropertyFragment.graphql";
import ScalarProperty from "../ScalarProperty";

export default function EmailProperty(props: Props) {
  const field = useFragment<EmailPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ label, required, register, isWide }) => (
        <Email
          label={label}
          required={required}
          isWide={isWide}
          {...register}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: EmailPropertyFragment$key;
}

const fragment = graphql`
  fragment EmailPropertyFragment on EmailProperty {
    ...ScalarPropertyFragment

    address
    defaultAddress
  }
`;
