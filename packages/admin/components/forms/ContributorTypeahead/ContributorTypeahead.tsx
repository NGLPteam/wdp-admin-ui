import React, { Ref, useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import get from "lodash/get";
import type { FieldValues, Control, Path } from "react-hook-form";
import Typeahead from "components/forms/Typeahead";

import type {
  ContributorTypeaheadFragment$key,
  ContributorTypeaheadFragment$data,
} from "__generated__/ContributorTypeaheadFragment.graphql";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName";
import { useMaybeFragment } from "hooks";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const ContributorTypeahead = <T extends FieldValues = FieldValues>(
  { data, control, name, label, disabled }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  const optionsData = useMaybeFragment(fragment, data);

  const options = useMemo(() => {
    return optionsData?.contributors.nodes.map((node: ContributorNode) => {
      return {
        label: getContributorDisplayName(node) || "",
        value: get(node, "id", ""),
      };
    });
  }, [optionsData]);

  return options ? (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <Typeahead
          label={label}
          options={options}
          disabled={disabled}
          {...field}
        />
      )}
    />
  ) : null;
};

interface Props<T> extends Omit<TypeaheadProps, "options" | "name"> {
  data?: ContributorTypeaheadFragment$key | null;
  control: Control<T>;
  name: Path<T>;
}

type ContributorNode =
  ContributorTypeaheadFragment$data["contributors"]["nodes"][number];

export default ContributorTypeahead;

// Currently limited to 50 contributors per query
const fragment = graphql`
  fragment ContributorTypeaheadFragment on Query {
    contributors {
      nodes {
        __typename
        ... on OrganizationContributor {
          id
          legalName
        }
        ... on PersonContributor {
          id
          givenName
          familyName
        }
      }
    }
  }
`;
