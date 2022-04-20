import React from "react";
import { graphql, readInlineData, useFragment } from "react-relay";
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
  UpdateCommunityInput,
  CommunityUpdateFormMutation,
} from "@/relay/CommunityUpdateFormMutation.graphql";
import type { CommunityUpdateFormFragment$key } from "@/relay/CommunityUpdateFormFragment.graphql";
import type { CommunityUpdateFormFieldsFragment$key } from "@/relay/CommunityUpdateFormFieldsFragment.graphql";
import SchemaFormFields from "components/api/SchemaFormFields";
import { useSchemaContext, useSchemaProperties } from "components/api/hooks";
import {
  CommunityUpdateFormSchemaErrorsFragment,
  CommunityUpdateFormSchemaErrorsFragment$key,
} from "@/relay/CommunityUpdateFormSchemaErrorsFragment.graphql";
import { convertSchemaErrors } from "components/api/SchemaInstanceForm/convertSchemaErrors";

type SchemaErrors = CommunityUpdateFormSchemaErrorsFragment["schemaErrors"];

export default function CommunityUpdateForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { communityId = "", ...fieldsData } =
    useFragment<CommunityUpdateFormFragment$key>(fragment, data);

  const { heroImage, logo, ...values } =
    useFragment<CommunityUpdateFormFieldsFragment$key>(
      fieldsFragment,
      fieldsData
    );

  const schemaProperties = useSchemaProperties(fieldsData);

  const mutationName = "updateCommunity";

  const { fieldValues: schemaFieldValues, defaultValues: schemaDefaultValues } =
    useSchemaContext(fieldsData.context);

  const toVariables = useToVariables<CommunityUpdateFormMutation, Fields>(
    (data) => {
      const inputValues = omit(data, schemaProperties);

      const schemaValues = pick(data, schemaProperties);

      return {
        input: {
          ...(inputValues as UpdateCommunityInput),
          schemaProperties: { ...schemaValues },
          communityId,
        },
      };
    },
    []
  );

  const defaultValues = {
    ...values,
    ...schemaDefaultValues,
    ...schemaFieldValues,
  };

  const isSuccess = useIsSuccess<CommunityUpdateFormMutation, Fields>(
    function (response) {
      const errors =
        readInlineData<CommunityUpdateFormSchemaErrorsFragment$key>(
          schemaErrorsFragment,
          response[mutationName]
        );

      return !errors?.schemaErrors || errors.schemaErrors.length === 0;
    },
    [mutationName]
  );

  const onFailure = useOnFailure<CommunityUpdateFormMutation, Fields>(
    function ({ response, setError }) {
      const errors =
        readInlineData<CommunityUpdateFormSchemaErrorsFragment$key>(
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
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <>
        <Forms.Grid>
          <Forms.Input
            label="forms.fields.title"
            {...register("title")}
            isWide
            required
          />
          <Forms.Input
            label="forms.fields.tagline"
            {...register("tagline")}
            isWide
          />
          <Forms.FileUpload
            label="forms.fields.logo"
            name="logo"
            data={logo}
            clearName="clearLogo"
          />
          <Forms.Textarea
            label="forms.fields.summary"
            {...register("summary")}
          />
          <Forms.Fieldset label="Hero">
            <Forms.FileUpload
              label="forms.fields.hero_image"
              name="heroImage"
              data={heroImage}
              clearName="clearHeroImage"
            />
            <Forms.AltText {...register("heroImageMetadata.alt")} />
            <Forms.Select
              label="forms.fields.hero_layout"
              options={[
                { label: "One Column", value: "ONE_COLUMN" },
                { label: "Two Column", value: "TWO_COLUMN" },
              ]}
              isWide
              required
              defaultValue="ONE_COLUMN"
              {...register("heroImageLayout")}
            />
          </Forms.Fieldset>
        </Forms.Grid>
        <SchemaFormFields data={fieldsData} schemaKind="COMMUNITY" />
      </>
    ),
    []
  );

  return (
    <MutationForm<CommunityUpdateFormMutation, Fields>
      name={mutationName}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.community_success"
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
    "onSuccess" | "onCancel"
  > {
  data: CommunityUpdateFormFragment$key;
}

type Fields = Omit<UpdateCommunityInput, "communityId">;

const fieldsFragment = graphql`
  fragment CommunityUpdateFormFieldsFragment on Community {
    title
    tagline
    summary
    heroImageLayout
    heroImage {
      ...FileUploadFragment
    }
    logo {
      ...FileUploadFragment
    }
    heroImageMetadata {
      alt
    }
  }
`;

const mutation = graphql`
  mutation CommunityUpdateFormMutation($input: UpdateCommunityInput!) {
    updateCommunity(input: $input) {
      community {
        ...CommunityUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
      ...CommunityUpdateFormSchemaErrorsFragment
    }
  }
`;

const fragment = graphql`
  fragment CommunityUpdateFormFragment on Community {
    communityId: id
    ...CommunityUpdateFormFieldsFragment
    ...SchemaFormFieldsFragment
    ...useSchemaPropertiesFragment

    context: schemaInstanceContext {
      ...useSchemaContextFragment
    }
  }
`;

const schemaErrorsFragment = graphql`
  fragment CommunityUpdateFormSchemaErrorsFragment on UpdateCommunityPayload
  @inline {
    schemaErrors {
      hint
      message
      metadata
      path
    }
  }
`;
