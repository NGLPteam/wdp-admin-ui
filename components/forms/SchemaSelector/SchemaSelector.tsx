import React from "react";
import { graphql } from "react-relay";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "hooks";
import Select from "components/forms/Select";
import BaseInputLabel from "components/forms/BaseInputLabel";
import { ButtonControl } from "components/atomic";

import { SchemaSelectorOptionsFragment$key } from "@/relay/SchemaSelectorOptionsFragment.graphql";
import { SchemaSelectorDataFragment$key } from "@/relay/SchemaSelectorDataFragment.graphql";
import { SchemaKind } from "types/graphql-schema";

import * as Styled from "./SchemaSelector.styles";
import SchemaSelectorModal from "./SchemaSelectorModal";

type SelectProps = React.ComponentProps<typeof Select>;

const SchemaSelector = ({ schemaOptions, schemaKind, schemaData }: Props) => {
  const optionsData = useMaybeFragment(optionsFragment, schemaOptions);
  const data = useMaybeFragment(dataFragment, schemaData);
  const dialog = useDialogState({ visible: false, animated: true });
  const { t } = useTranslation();

  return optionsData && schemaKind && data?.schemaVersion && data?.entityId ? (
    <>
      <Styled.FieldWrapper>
        <BaseInputLabel as="span">
          {t("forms.schema.selector.current_label")}
        </BaseInputLabel>
        <Styled.Field>
          {data?.schemaVersion && (
            <Styled.VersionText>{`${data.schemaVersion.name} ${data.schemaVersion.number}`}</Styled.VersionText>
          )}
          <DialogDisclosure as={ButtonControl} {...dialog}>
            {t("forms.schema.selector.button")}
          </DialogDisclosure>
        </Styled.Field>
      </Styled.FieldWrapper>
      <SchemaSelectorModal
        dialog={dialog}
        optionsData={optionsData}
        entityId={data?.entityId}
        schemaVersionSlug={data?.schemaVersion?.slug}
        schemaKind={schemaKind}
      />
    </>
  ) : null;
};

interface Props extends Pick<SelectProps, "defaultValue"> {
  schemaOptions?: SchemaSelectorOptionsFragment$key;
  schemaData?: SchemaSelectorDataFragment$key;
  schemaKind?: SchemaKind;
}

export default SchemaSelector;

const optionsFragment = graphql`
  fragment SchemaSelectorOptionsFragment on SchemaVersionConnection {
    edges {
      node {
        name
        namespace
        identifier
        kind
        slug
        number
      }
    }
  }
`;

const dataFragment = graphql`
  fragment SchemaSelectorDataFragment on AnyEntity {
    ... on Collection {
      entityId: id
      schemaVersion {
        name
        number
        slug
      }
    }
    ... on Item {
      entityId: id
      schemaVersion {
        name
        number
        slug
      }
    }
  }
`;
