import React from "react";
import { graphql } from "react-relay";
import MutationForm, { Forms } from "components/api/MutationForm";

import type {
  UserGrantCommunityAccessFormMutation as Mutation,
  GrantAccessInput as Fields,
} from "@/relay/UserGrantCommunityAccessFormMutation.graphql";
import RoleSelect from "components/forms/RoleSelect";
import { useMaybeFragment } from "hooks";
import { UserGrantCommunityAccessFormFragment$key } from "@/relay/UserGrantCommunityAccessFormFragment.graphql";

const UserGrantCommunityAccessForm = ({
  data,
  onSuccess,
  onCancel,
  userId,
}: Props) => {
  const formData = useMaybeFragment(fragment, data);

  const defaultValues = {
    userId,
  };

  return (
    <MutationForm<Mutation, Fields>
      mutation={mutation}
      name="grantAccess"
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.member_success"
      defaultValues={defaultValues}
    >
      {({ form: { register } }) => (
        <Forms.Grid>
          <input type="hidden" {...register("userId")} />
          <Forms.CommunitySelect
            label="forms.fields.community"
            data={formData}
            {...register("entityId")}
          />
          <RoleSelect
            label="forms.fields.role"
            data={formData}
            {...register("roleId")}
          />
        </Forms.Grid>
      )}
    </MutationForm>
  );
};

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel"
  > {
  userId?: string;
  data?: UserGrantCommunityAccessFormFragment$key | null;
}

export default UserGrantCommunityAccessForm;

// Load dropdown lists
const fragment = graphql`
  fragment UserGrantCommunityAccessFormFragment on Query {
    # eslint-disable-next-line relay/must-colocate-fragment-spreads
    ...CommunitySelectFragment
    ...RoleSelectFragment
  }
`;

const mutation = graphql`
  mutation UserGrantCommunityAccessFormMutation($input: GrantAccessInput!) {
    grantAccess(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
