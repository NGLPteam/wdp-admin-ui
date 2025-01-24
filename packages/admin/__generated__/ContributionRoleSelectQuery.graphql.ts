/**
 * @generated SignedSource<<33f05e8fb93e5f0d9003947b978a41e6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ContributionRoleSelectQuery$variables = {
  id?: string | null | undefined;
};
export type ContributionRoleSelectQuery$data = {
  readonly contributionRoles: {
    readonly controlledVocabulary: {
      readonly items: ReadonlyArray<{
        readonly id: string;
        readonly identifier: string;
        readonly label: string;
        readonly unselectable: boolean;
      }>;
    };
  };
};
export type ContributionRoleSelectQuery = {
  response: ContributionRoleSelectQuery$data;
  variables: ContributionRoleSelectQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "contributableId",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "ControlledVocabularyItem",
  "kind": "LinkedField",
  "name": "items",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identifier",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unselectable",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ContributionRoleSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ContributionRoleConfiguration",
        "kind": "LinkedField",
        "name": "contributionRoles",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ControlledVocabulary",
            "kind": "LinkedField",
            "name": "controlledVocabulary",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ContributionRoleSelectQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ContributionRoleConfiguration",
        "kind": "LinkedField",
        "name": "contributionRoles",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ControlledVocabulary",
            "kind": "LinkedField",
            "name": "controlledVocabulary",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
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
    "cacheID": "cc68702c613640ec06c2b708a61e128d",
    "id": null,
    "metadata": {},
    "name": "ContributionRoleSelectQuery",
    "operationKind": "query",
    "text": "query ContributionRoleSelectQuery(\n  $id: ID\n) {\n  contributionRoles(contributableId: $id) {\n    controlledVocabulary {\n      items {\n        id\n        label\n        identifier\n        unselectable\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c3e432fe2620df260ee9fef82a892834";

export default node;
