import { useCallback } from "react";
import { useMutation } from "relay-hooks";
import { useNotify } from "hooks";
import { useTranslation } from "react-i18next";
import { graphql, readInlineData } from "react-relay";
import type {
  DestroyCommunityInput,
  useDestroyerDestroyCommunityMutation,
} from "@/relay/useDestroyerDestroyCommunityMutation.graphql";
import type {
  DestroyContributorInput,
  useDestroyerDestroyContributorMutation,
} from "@/relay/useDestroyerDestroyContributorMutation.graphql";
import type {
  DestroyCollectionInput,
  useDestroyerDestroyCollectionMutation,
} from "@/relay/useDestroyerDestroyCollectionMutation.graphql";
import type {
  DestroyItemInput,
  useDestroyerDestroyItemMutation,
} from "@/relay/useDestroyerDestroyItemMutation.graphql";
import type {
  DestroyContributionInput,
  useDestroyerDestroyContributionMutation,
} from "@/relay/useDestroyerDestroyContributionMutation.graphql";

import type { useDestroyerFragment$key } from "@/relay/useDestroyerFragment.graphql";
import { useDestroyerFragment } from "@/relay/useDestroyerFragment.graphql";

export function useDestroyer() {
  const notify = useNotify();
  const { t } = useTranslation();

  const handleResponse = useCallback(
    (data: useDestroyerFragment$key | null, name: string) => {
      if (!data) return;
      const results = readInlineData<useDestroyerFragment>(
        destroyFragment,
        data
      );
      if (results.destroyed) {
        notify.success(t("outcomes.deleted", { name }));
      } else if (results.globalErrors.length > 0) {
        notify.mutationGlobalError(results.globalErrors);
      }
    },
    [notify, t]
  );

  /* Destroy a collection */
  const [
    commitDestroyCollection,
  ] = useMutation<useDestroyerDestroyCollectionMutation>(
    destroyCollectionMutation
  );

  const collection = useCallback(
    async (input: DestroyCollectionInput, label: string) => {
      const response = await commitDestroyCollection({ variables: { input } });
      return handleResponse(response.destroyCollection, label);
    },
    [commitDestroyCollection, handleResponse]
  );

  /* Destroy a item */
  const [commitDestroyItem] = useMutation<useDestroyerDestroyItemMutation>(
    destroyItemMutation
  );

  const item = useCallback(
    async (input: DestroyItemInput, label: string) => {
      const response = await commitDestroyItem({ variables: { input } });
      return handleResponse(response.destroyItem, label);
    },
    [commitDestroyItem, handleResponse]
  );

  /* Destroy a contribution */
  const [
    commitDestroyContribution,
  ] = useMutation<useDestroyerDestroyContributionMutation>(
    destroyContributionMutation
  );

  const contribution = useCallback(
    async (input: DestroyContributionInput, label: string) => {
      const response = await commitDestroyContribution({
        variables: { input },
      });
      return handleResponse(response.destroyContribution, label);
    },
    [commitDestroyContribution, handleResponse]
  );

  /* Destroy a community */
  const [
    commitDestroyCommunity,
  ] = useMutation<useDestroyerDestroyCommunityMutation>(
    destroyCommunityMutation
  );

  const community = useCallback(
    async (input: DestroyCommunityInput, label: string) => {
      const response = await commitDestroyCommunity({ variables: { input } });
      return handleResponse(response.destroyCommunity, label);
    },
    [commitDestroyCommunity, handleResponse]
  );

  /* Destroy a contributor */
  const [
    commitDestroyContributor,
  ] = useMutation<useDestroyerDestroyContributorMutation>(
    destroyContributorMutation
  );

  const contributor = useCallback(
    async (input: DestroyContributorInput, label: string) => {
      const response = await commitDestroyContributor({ variables: { input } });
      return handleResponse(response.destroyContributor, label);
    },
    [commitDestroyContributor, handleResponse]
  );

  /* Destroy a file */
  // const [commitDestroyFile] = useMutation<useDestroyerDestroyFileMutation>(
  //   destroyFileMutation
  // );

  // const file = useCallback(
  //   async (input: DestroyFileInput, label: string) => {
  //     const response = await commitDestroyFile({
  //       variables: { input },
  //     });
  //     return handleResponse(response.destroyFile, label);
  //   },
  //   [commitDestroyFile, handleResponse]
  // );

  return {
    collection,
    item,
    community,
    contributor,
    contribution,
    // file,
  };
}
export default useDestroyer;

const destroyCollectionMutation = graphql`
  mutation useDestroyerDestroyCollectionMutation(
    $input: DestroyCollectionInput!
  ) {
    destroyCollection(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyItemMutation = graphql`
  mutation useDestroyerDestroyItemMutation($input: DestroyItemInput!) {
    destroyItem(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyContributorMutation = graphql`
  mutation useDestroyerDestroyContributorMutation(
    $input: DestroyContributorInput!
  ) {
    destroyContributor(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyContributionMutation = graphql`
  mutation useDestroyerDestroyContributionMutation(
    $input: DestroyContributionInput!
  ) {
    destroyContribution(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

const destroyCommunityMutation = graphql`
  mutation useDestroyerDestroyCommunityMutation(
    $input: DestroyCommunityInput!
  ) {
    destroyCommunity(input: $input) {
      destroyedId @deleteRecord
      ...useDestroyerFragment
    }
  }
`;

// const destroyFileMutation = graphql`
//   mutation useDestroyerDestroyFileMutation($input: DestroyFileInput!) {
//     destroyAsset(input: $input) {
//       destroyedId @deleteRecord
//       ...useDestroyerFragment
//     }
//   }
// `;

const destroyFragment = graphql`
  fragment useDestroyerFragment on DestroyMutationPayload @inline {
    destroyed # can be boolean or nil, basically just a truthy check
    globalErrors {
      message
      type
    }
  }
`;
