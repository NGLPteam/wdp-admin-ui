import { forwardRef, Ref, useMemo } from "react";
import { graphql } from "react-relay";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import Select from "components/forms/Select";
import { ControlledVocabularySelectQuery as Query } from "@/relay/ControlledVocabularySelectQuery.graphql";

type SelectProps = React.ComponentProps<typeof Select>;

const ControlledVocabularySelect = forwardRef(
  (
    { id, label, disabled, ...inputProps }: Props,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const { controlledVocabularies } = useAuthenticatedQuery<Query>(query, {
      id,
    });

    const options = useMemo(() => {
      return controlledVocabularies.nodes.map(({ name, id }) => {
        return {
          label: name,
          value: id,
        };
      });
    }, [controlledVocabularies]);

    return (
      <Select
        label={label}
        options={options}
        disabled={disabled}
        ref={ref}
        {...inputProps}
      />
    );
  },
);

interface Props extends Omit<SelectProps, "options"> {
  id?: string;
}

export default ControlledVocabularySelect;

const query = graphql`
  query ControlledVocabularySelectQuery {
    controlledVocabularies {
      nodes {
        id
        name
      }
    }
  }
`;
