import React, { useState, useCallback } from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { RouteHelper } from "routes";
import { useRouter } from "next/router";

import type {
  MainItemsPageAddFormMutation,
  CreateItemInput,
} from "@/relay/MainItemsPageAddFormMutation.graphql";
import type { MainItemsPageAddFormFragment$key } from "@/relay/MainItemsPageAddFormFragment.graphql";
import { sanitizeDateField } from "helpers";

export default function ItemAddForm({ onSuccess, onCancel, data }: Props) {
  const [redirectOnSuccess, setRedirectOnSuccess] = useState(true);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRedirectOnSuccess(e.target.checked);

  const router = useRouter();
  const redirect = useCallback(
    (slug: string, routeName: string) => {
      const newRoute = RouteHelper.findRouteByName(routeName);

      router.replace({
        pathname: newRoute?.path,
        query: { slug },
      });
    },
    [router]
  );

  const onSuccessWithRedirect = ({
    response,
    variables,
    values,
  }: {
    response: MainItemsPageAddFormMutation["response"];
    variables: MainItemsPageAddFormMutation["variables"];
    values: Fields;
  }) => {
    if (onSuccess) onSuccess({ response, variables, values });
    const routeName = "item.manage.details";
    if (response?.createItem?.item)
      redirect(response.createItem.item.slug, routeName);
  };

  const schemaOptions = useFragment<MainItemsPageAddFormFragment$key>(
    fragment,
    data
  );

  const toVariables = useToVariables<MainItemsPageAddFormMutation, Fields>(
    (data) => ({
      input: {
        ...data,
        visibleAfterAt: sanitizeDateField(data.visibleAfterAt),
        visibleUntilAt: sanitizeDateField(data.visibleUntilAt),
      },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register, watch } }) => (
      <Forms.Grid>
        <Forms.Input
          label="forms.fields.title"
          required
          {...register("title")}
        />
        {/* Typeahead for Collection or Item goes here when ready. (parentId) */}
        {schemaOptions && (
          <Forms.Select
            options={schemaOptions.schemaVersionOptions.map((option) => ({
              label: option.label,
              value: option.value,
            }))}
            label="forms.schema.label"
            {...register("schemaVersionSlug")}
          />
        )}
        <Forms.Input label="forms.fields.doi" {...register("doi")} />
        <Forms.FileUpload
          label="forms.fields.thumbnail"
          {...register("thumbnail")}
        />
        <Forms.Textarea label="forms.fields.summary" {...register("summary")} />
        <Forms.Select
          label="forms.fields.visibility"
          options={[
            { label: "Visible", value: "VISIBLE" },
            { label: "Hidden", value: "HIDDEN" },
            { label: "Limited", value: "LIMITED" },
          ]}
          isWide
          required
          {...register("visibility")}
        />
        <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
          <Forms.Datepicker
            label="forms.fields.visible_after"
            {...register("visibleAfterAt")}
          />
        </Forms.HiddenField>
        <Forms.HiddenField watch={watch} field="visibility" showOn="LIMITED">
          <Forms.Datepicker
            label="forms.fields.visible_until"
            {...register("visibleUntilAt")}
          />
        </Forms.HiddenField>
        <Forms.Checkbox defaultChecked name="redirect" onChange={handleCheck}>
          Open new item on create
        </Forms.Checkbox>
      </Forms.Grid>
    ),
    []
  );
  return (
    <MutationForm<MainItemsPageAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={redirectOnSuccess ? onSuccessWithRedirect : onSuccess}
      successNotification="messages.add.item_success"
      onCancel={onCancel}
      name="createItem"
      refetchTags={redirectOnSuccess ? undefined : ["items"]}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Fields = Omit<CreateItemInput, "clientMutationId">;

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & {
  data: MainItemsPageAddFormFragment$key;
};

const fragment = graphql`
  fragment MainItemsPageAddFormFragment on Query {
    schemaVersionOptions(kind: ITEM) {
      label
      value
    }
  }
`;

const mutation = graphql`
  mutation MainItemsPageAddFormMutation($input: CreateItemInput!) {
    createItem(input: $input) {
      item {
        title
        slug
      }
      ...MutationForm_mutationErrors
    }
  }
`;
