import React from "react";
import { useFragment } from "relay-hooks";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import FormGrid from "components/forms/FormGrid";
import { ContentHeader } from "components/layout";
import SchemaSelector from "components/forms/SchemaSelector";
import { SchemaInstanceFormFragment$key } from "@/relay/SchemaInstanceFormFragment.graphql";
import { SchemaInstanceFormSchemaOptionsFragment$key } from "@/relay/SchemaInstanceFormSchemaOptionsFragment.graphql";

import Property from "./SchemaInstanceProperty";
import Provider from "./SchemaInstanceProvider";

import type { OnSuccessCallback } from "./types";
type ProviderProps = React.ComponentProps<typeof Provider>;
type SchemaSelectorProps = React.ComponentProps<typeof SchemaSelector>;

export default function SchemaInstanceForm({
  onSuccess,
  onSaveAndClose,
  onCancel,
  successNotification,
  failureNotification,
  title = "forms.schema.title",
  data,
  schemaKind,
  ...props
}: Props) {
  const instance = useFragment(fragment, props.instance);
  const dataWithOptions = useFragment(schemaOptionsFragment, data);
  const schemaOptions = dataWithOptions?.schemaVersions;

  const { t } = useTranslation();

  function renderForm() {
    return instance.properties && instance.properties.length > 0 ? (
      <Provider
        context={instance.context}
        onSuccess={onSuccess}
        onSaveAndClose={onSaveAndClose}
        onCancel={onCancel}
        successNotification={successNotification}
        failureNotification={failureNotification}
      >
        <FormGrid>
          <SchemaSelector
            schemaOptions={schemaOptions}
            schemaData={instance}
            schemaKind={schemaKind}
          />
          {instance.properties.map((prop, index) => (
            <Property property={prop} key={index} />
          ))}
        </FormGrid>
      </Provider>
    ) : (
      <SchemaSelector
        schemaOptions={schemaOptions}
        schemaData={instance}
        schemaKind={schemaKind}
      />
    );
  }

  return (
    <>
      <ContentHeader title={t(title)} headerStyle="secondary" />
      {renderForm()}
    </>
  );
}

type ProviderTypes = Pick<
  ProviderProps,
  "successNotification" | "failureNotification"
>;

type SchemaTypes = Partial<
  Pick<SchemaSelectorProps, "schemaKind" | "schemaOptions">
>;

interface Props extends ProviderTypes, SchemaTypes {
  instance: SchemaInstanceFormFragment$key;
  data: SchemaInstanceFormSchemaOptionsFragment$key;
  onSuccess?: OnSuccessCallback;
  onCancel?: () => void;
  onSaveAndClose?: () => void;
  title?: string;
}

const schemaOptionsFragment = graphql`
  fragment SchemaInstanceFormSchemaOptionsFragment on Query {
    schemaVersions {
      ...SchemaSelectorOptionsFragment
    }
  }
`;

const fragment = graphql`
  fragment SchemaInstanceFormFragment on SchemaInstance {
    context: schemaInstanceContext {
      ...SchemaInstanceProviderFragment
    }

    properties: schemaProperties {
      ...SchemaInstancePropertyFragment
    }

    ...SchemaSelectorDataFragment
  }
`;
