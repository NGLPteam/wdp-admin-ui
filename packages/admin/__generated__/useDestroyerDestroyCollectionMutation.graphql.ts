/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DestroyCollectionInput = {
    collectionId: string;
    clientMutationId?: string | null | undefined;
};
export type useDestroyerDestroyCollectionMutationVariables = {
    input: DestroyCollectionInput;
};
export type useDestroyerDestroyCollectionMutationResponse = {
    readonly destroyCollection: {
        readonly destroyedId: string | null;
        readonly " $fragmentRefs": FragmentRefs<"useDestroyerFragment">;
    } | null;
};
export type useDestroyerDestroyCollectionMutation = {
    readonly response: useDestroyerDestroyCollectionMutationResponse;
    readonly variables: useDestroyerDestroyCollectionMutationVariables;
};



/*
mutation useDestroyerDestroyCollectionMutation(
  $input: DestroyCollectionInput!
) {
  destroyCollection(input: $input) {
    destroyedId
    ...useDestroyerFragment
  }
}

fragment useDestroyerFragment on StandardMutationPayload {
  __isStandardMutationPayload: __typename
  ... on DestroyMutationPayload {
    __isDestroyMutationPayload: __typename
    destroyed
    globalErrors {
      message
      type
    }
  }
  ... on RevokeAccessPayload {
    revoked
    globalErrors {
      message
      type
    }
  }
  ... on DestroyOrderingPayload {
    disabled
    globalErrors {
      message
      type
    }
  }
}
*/

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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "destroyedId",
  "storageKey": null
},
v3 = {
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "destroyed",
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "type": "DestroyMutationPayload",
      "abstractKey": "__isDestroyMutationPayload"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "revoked",
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "type": "RevokeAccessPayload",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "disabled",
          "storageKey": null
        },
        (v3/*: any*/)
      ],
      "type": "DestroyOrderingPayload",
      "abstractKey": null
    }
  ],
  "type": "StandardMutationPayload",
  "abstractKey": "__isStandardMutationPayload"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useDestroyerDestroyCollectionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyCollectionPayload",
        "kind": "LinkedField",
        "name": "destroyCollection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineDataFragmentSpread",
            "name": "useDestroyerFragment",
            "selections": [
              (v4/*: any*/)
            ]
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
    "name": "useDestroyerDestroyCollectionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyCollectionPayload",
        "kind": "LinkedField",
        "name": "destroyCollection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteRecord",
            "key": "",
            "kind": "ScalarHandle",
            "name": "destroyedId"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "de684971e9adbeef1799fc1594b5db67",
    "id": null,
    "metadata": {},
    "name": "useDestroyerDestroyCollectionMutation",
    "operationKind": "mutation",
    "text": "mutation useDestroyerDestroyCollectionMutation(\n  $input: DestroyCollectionInput!\n) {\n  destroyCollection(input: $input) {\n    destroyedId\n    ...useDestroyerFragment\n  }\n}\n\nfragment useDestroyerFragment on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  ... on DestroyMutationPayload {\n    __isDestroyMutationPayload: __typename\n    destroyed\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on RevokeAccessPayload {\n    revoked\n    globalErrors {\n      message\n      type\n    }\n  }\n  ... on DestroyOrderingPayload {\n    disabled\n    globalErrors {\n      message\n      type\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '36239aff362b45325ca9184eb6b38b91';
export default node;
