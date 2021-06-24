import React, { useCallback } from "react";
import { ContributorListQueryVariables } from "__generated__/ContributorListQuery.graphql";

export default function ContributorHeaders({ variables, setVariables }: Props) {
  const handleSort = useCallback(() => {
    const newOrder = variables.order === "RECENT" ? "OLDEST" : "RECENT";
    setVariables({ order: newOrder });
  }, [variables, setVariables]);

  return (
    <div>
      <h4>Name</h4>
      <button onClick={handleSort}>
        Sort {/* TODO: use lovely svg caret */}
        {variables.order === "RECENT" ? "RECENT" : "OLDEST"}
      </button>
    </div>
  );
}

export interface Variables extends ContributorListQueryVariables {
  order: "RECENT" | "OLDEST";
}

interface Props {
  variables: Variables;
  setVariables: React.Dispatch<React.SetStateAction<Variables>>;
}
