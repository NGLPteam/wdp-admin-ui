import React from "react";
import { graphql, readInlineData, useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import { getDateOnly } from "@wdp/lib/helpers";
import omit from "lodash/omit";
import pick from "lodash/pick";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
  useIsSuccess,
  useOnFailure,
} from "components/api/MutationForm";
import type {
  UpdateItemInput,
  ItemUpdateFormMutation,
} from "@/relay/ItemUpdateFormMutation.graphql";
import type { ItemUpdateFormFragment$key } from "@/relay/ItemUpdateFormFragment.graphql";
import type { ItemUpdateFormFieldsFragment$key } from "@/relay/ItemUpdateFormFieldsFragment.graphql";
import { sanitizeDateField } from "helpers";
import { useSchemaContext, useSchemaProperties } from "components/api/hooks";
import {
  ItemUpdateForm_schemaErrorsFragment,
  // eslint-disable-next-line max-len
  ItemUpdateForm_schemaErrorsFragment$key as SchemaErrorsFragment$key,
} from "@/relay/ItemUpdateForm_schemaErrorsFragment.graphql";
import { convertSchemaErrors } from "components/api/SchemaInstanceForm/convertSchemaErrors";
import SchemaFormFields from "components/api/SchemaFormFields";

// eslint-disable-next-line camelcase, prettier/prettier
type SchemaErrors = ItemUpdateForm_schemaErrorsFragment["schemaErrors"];

export default function ItemUpdateForm({
  data,
  onSuccess,
  onCancel,
  onSaveAndClose,
}: Props) {
  const { t } = useTranslation();

  const mutationName = "updateItem";

  // eslint-disable-next-line prettier/prettier
  const {
    itemId = "",
    ...fieldsData
  } = useFragment<ItemUpdateFormFragment$key>(fragment, data);

  // eslint-disable-next-line prettier/prettier
  const {
    fieldValues: schemaFieldValues,
    defaultValues: schemaDefaultValues,
  } = useSchemaContext(fieldsData.context);

  const schemaProperties = useSchemaProperties(fieldsData);

  const {
    thumbnail,
    heroImage,
    visibleAfterAt,
    visibleUntilAt,
    published,
    accessioned,
    available,
    issued,
    ...values
  } = useFragment<ItemUpdateFormFieldsFragment$key>(fieldsFragment, fieldsData);

  const defaultValues = {
    ...values,
    title: values.title || undefined,
    visibleAfterAt: getDateOnly(visibleAfterAt),
    visibleUntilAt: getDateOnly(visibleUntilAt),
    ...schemaDefaultValues,
    ...schemaFieldValues,
  };

  const isSuccess = useIsSuccess<ItemUpdateFormMutation, Fields>(
    function (response) {
      const errors = readInlineData<SchemaErrorsFragment$key>(
        schemaErrorsFragment,
        response[mutationName]
      );

      return !errors?.schemaErrors || errors.schemaErrors.length === 0;
    },
    [mutationName]
  );

  const onFailure = useOnFailure<ItemUpdateFormMutation, Fields>(function ({
    response,
    setError,
  }) {
    const errors = readInlineData<SchemaErrorsFragment$key>(
      schemaErrorsFragment,
      response[mutationName]
    );

    if (errors?.schemaErrors) {
      const convertedErrors = convertSchemaErrors<SchemaErrors>(
        errors.schemaErrors
      );

      for (const { path, error } of convertedErrors) {
        setError(path, error);
      }
    }
  },
  []);

  const toVariables = useToVariables<ItemUpdateFormMutation, Fields>((data) => {
    const inputValues = omit(data, schemaProperties);

    const schemaValues = pick(data, schemaProperties);

    return {
      input: {
        ...(inputValues as UpdateItemInput),
        itemId,
        visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
        visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
        schemaProperties: {
          ...schemaValues,
        },
      },
    };
  }, []);

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => (
      <>
        <Forms.Grid>
          <Forms.Input
            label="forms.fields.title"
            {...register("title")}
            required
            isWide
          />
          <Forms.Input
            label="forms.fields.subtitle"
            isWide
            {...register("subtitle")}
          />
          <Forms.Select
            label="forms.fields.visibility"
            options={[
              { label: "Visible", value: "VISIBLE" },
              { label: "Hidden", value: "HIDDEN" },
              { label: "Limited", value: "LIMITED" },
            ]}
            isWide
            {...register("visibility")}
          />
          <Forms.Input label="forms.fields.doi" {...register("doi")} />
          <Forms.Input label="forms.fields.issn" {...register("issn")} />
          <Forms.FileUpload
            label="forms.fields.thumbnail"
            name="thumbnail"
            image={thumbnail?.thumb}
            clearName="clearThumbnail"
          />
          <Forms.FileUpload
            label="forms.fields.hero_image"
            name="heroImage"
            image={heroImage?.thumb}
            clearName="clearHeroImage"
          />
          <Forms.Textarea
            label="forms.fields.summary"
            {...register("summary")}
            isWide
          />
          <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
            <Forms.DatePicker
              label="forms.fields.visible_after"
              {...register("visibleAfterAt")}
            />
          </Forms.HiddenField>
          <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
            <Forms.DatePicker
              label="forms.fields.visible_until"
              {...register("visibleUntilAt")}
            />
          </Forms.HiddenField>
          <Forms.VariablePrecisionDateControl
            name="published"
            data={published}
            label="forms.fields.published"
            isWide
          />
          <Forms.VariablePrecisionDateControl
            name="accessioned"
            data={accessioned}
            label="forms.fields.accessioned"
            isWide
          />
          <Forms.VariablePrecisionDateControl
            name="available"
            data={available}
            label="forms.fields.available"
            isWide
          />
          <Forms.VariablePrecisionDateControl
            name="issued"
            data={issued}
            label="forms.fields.issued"
            isWide
          />
        </Forms.Grid>
        <SchemaFormFields data={fieldsData} schemaKind="ITEM" />
      </>
    ),
    []
  );

  return (
    <MutationForm<ItemUpdateFormMutation, Fields>
      name={mutationName}
      onSuccess={onSuccess}
      onSaveAndClose={onSaveAndClose}
      onCancel={onCancel}
      successNotification={t("messages.update.item_success", {
        name: values.title,
      })}
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
      isSuccess={isSuccess}
      onFailure={onFailure}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel" | "onSaveAndClose"
  > {
  data: ItemUpdateFormFragment$key;
}

type Fields = Omit<UpdateItemInput, "itemId">;

const fieldsFragment = graphql`
  fragment ItemUpdateFormFieldsFragment on Item {
    title
    subtitle
    doi
    issn
    visibility
    summary
    visibleAfterAt
    visibleUntilAt
    thumbnail {
      storage
      thumb {
        png {
          alt
          url
        }
      }
    }
    heroImage {
      storage
      thumb {
        png {
          alt
          url
        }
      }
    }
    published {
      ...VariablePrecisionDateControlFragment
    }
    accessioned {
      ...VariablePrecisionDateControlFragment
    }
    available {
      ...VariablePrecisionDateControlFragment
    }
    issued {
      ...VariablePrecisionDateControlFragment
    }
  }
`;

const mutation = graphql`
  mutation ItemUpdateFormMutation($input: UpdateItemInput!) {
    updateItem(input: $input) {
      item {
        ...ItemUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
      ...ItemUpdateForm_schemaErrorsFragment
    }
  }
`;

const fragment = graphql`
  fragment ItemUpdateFormFragment on Item {
    itemId: id

    context: schemaInstanceContext {
      ...useSchemaContextFragment
    }

    ...ItemUpdateFormFieldsFragment
    ...SchemaFormFieldsFragment
    ...useSchemaPropertiesFragment
  }
`;

const schemaErrorsFragment = graphql`
  fragment ItemUpdateForm_schemaErrorsFragment on UpdateItemPayload @inline {
    schemaErrors {
      hint
      message
      metadata
      path
    }
  }
`;
