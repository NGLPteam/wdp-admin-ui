import React from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";

import ScalarProperty from "../ScalarProperty";
import Input from "components/forms/Input";
import type { FloatPropertyFragment$key } from "@/relay/FloatPropertyFragment.graphql";

export default function FloatProperty(props: Props) {
  const field = useFragment<FloatPropertyFragment$key>(fragment, props.field);

  return (
    <ScalarProperty field={field}>
      {({ name, label, required, register, isWide }) => (
        <Input
          name={name}
          label={label}
          required={required}
          type="number"
          isWide={isWide}
          {...register}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: FloatPropertyFragment$key;
}

const fragment = graphql`
  fragment FloatPropertyFragment on FloatProperty {
    ...ScalarPropertyFragment

    floatValue
    defaultFloat
  }
`;
