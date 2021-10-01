import React from "react";
import { useFragment } from "relay-hooks";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { MessageBlock } from "components/atomic";
import FormGrid from "components/forms/FormGrid";

import { SchemaInstanceFormFragment$key } from "@/relay/SchemaInstanceFormFragment.graphql";

import Property from "./SchemaInstanceProperty";
import Provider from "./SchemaInstanceProvider";

import type { OnSuccessCallback } from "./types";
import { ContentHeader } from "components/layout";
type ProviderProps = React.ComponentProps<typeof Provider>;

export default function SchemaInstanceForm({
  onSuccess,
  onCancel,
  successNotification,
  failureNotification,
  title = "forms.schema.title",
  ...props
}: Props) {
  const instance = useFragment(fragment, props.instance);
  const { t } = useTranslation();

  function renderForm() {
    return instance.properties && instance.properties.length > 0 ? (
      <Provider
        context={instance.context}
        onSuccess={onSuccess}
        onCancel={onCancel}
        successNotification={successNotification}
        failureNotification={failureNotification}
      >
        <FormGrid>
          {instance.properties.map((prop, index) => (
            <Property property={prop} key={index} />
          ))}
        </FormGrid>
      </Provider>
    ) : (
      <MessageBlock type="empty" name={t("forms.schema.noSchema")} />
    );
  }

  return (
    <>
      <ContentHeader title={t(title)} headerStyle="secondary" />
      {renderForm()}
    </>
  );
}

interface Props
  extends Pick<ProviderProps, "successNotification" | "failureNotification"> {
  instance: SchemaInstanceFormFragment$key;
  onSuccess?: OnSuccessCallback;
  onCancel?: () => void;
  title?: string;
}

const fragment = graphql`
  fragment SchemaInstanceFormFragment on SchemaInstance {
    context: schemaInstanceContext {
      ...SchemaInstanceProviderFragment
    }

    properties: schemaProperties {
      ...SchemaInstancePropertyFragment
    }
  }
`;
