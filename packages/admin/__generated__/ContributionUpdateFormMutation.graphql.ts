/**
 * @generated SignedSource<<70183ca42f77960d2d822422df7a16ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateContributionInput = {
  clientMutationId?: string | null | undefined;
  contributionId: string;
  metadata?: ContributionMetadataInput | null | undefined;
  position?: number | null | undefined;
};
export type ContributionMetadataInput = {
  affiliation?: string | null | undefined;
  displayName?: string | null | undefined;
  location?: string | null | undefined;
  title?: string | null | undefined;
};
export type ContributionUpdateFormMutation$variables = {
  input: UpdateContributionInput;
};
export type ContributionUpdateFormMutation$data = {
  readonly updateContribution: {
    readonly contribution: {
      readonly " $fragmentSpreads": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type ContributionUpdateFormMutation = {
  response: ContributionUpdateFormMutation$data;
  variables: ContributionUpdateFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationAttributeError",
      "kind": "LinkedField",
      "name": "attributeErrors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "path",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "messages",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MutationGlobalError",
      "kind": "LinkedField",
      "name": "globalErrors",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "message",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "position",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributionUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateContributionPayload",
        "kind": "LinkedField",
        "name": "updateContribution",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contribution",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ContributionUpdateFormFieldsFragment"
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": [
              (v2/*: any*/)
            ],
            "args": null,
            "argumentDefinitions": []
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContributionUpdateFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateContributionPayload",
        "kind": "LinkedField",
        "name": "updateContribution",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "contribution",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isAnyContribution"
              },
              {
                "kind": "InlineFragment",
                "selections": (v3/*: any*/),
                "type": "CollectionContribution",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v3/*: any*/),
                "type": "ItemContribution",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "type": "Node",
                "abstractKey": "__isNode"
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a6245bed860e5b6f177595ca16e9ff68",
    "id": null,
    "metadata": {},
    "name": "ContributionUpdateFormMutation",
    "operationKind": "mutation",
    "text": "mutation ContributionUpdateFormMutation(\n  $input: UpdateContributionInput!\n) {\n  updateContribution(input: $input) {\n    contribution {\n      __typename\n      ...ContributionUpdateFormFieldsFragment\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment ContributionUpdateFormFieldsFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    position\n  }\n  ... on ItemContribution {\n    position\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "6ecc4931761a40931004f5fb92221a1f";

export default node;
