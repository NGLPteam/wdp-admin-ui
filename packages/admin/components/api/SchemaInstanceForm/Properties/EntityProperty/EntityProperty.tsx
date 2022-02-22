import React, { useMemo } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ScalarProperty from "../ScalarProperty";
import Select from "components/forms/Select";
import { getEntityTitle } from "components/factories/EntityTitleFactory";

import type { EntityPropertyFragment$key } from "@/relay/EntityPropertyFragment.graphql";

export default function EntityProperty(props: Props) {
  const field = useFragment<EntityPropertyFragment$key>(fragment, props.field);

  const { register } = useFormContext();

  const { t } = useTranslation();

  const options = useMemo(() => {
    return field.availableEntities.map(({ entity, value }) => ({
      label: getEntityTitle(entity),
      value,
    }));
  }, [field]);

  return (
    <ScalarProperty field={field}>
      {({ label, required, name, isWide }) => (
        <Select
          label={label}
          required={required}
          options={options}
          isWide={isWide}
          placeholder={
            required ? undefined : t("forms.fields.select_placeholder")
          }
          {...register(name)}
        />
      )}
    </ScalarProperty>
  );
}

interface Props {
  field: EntityPropertyFragment$key;
}

const fragment = graphql`
  fragment EntityPropertyFragment on EntityProperty {
    ...ScalarPropertyFragment
    availableEntities {
      label
      value
      entity {
        ...getEntityTitleFragment
      }
    }
  }
`;
