/**
 * @generated SignedSource<<9cdf409f9bd9dfb93c0372abc1aecee9>>
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
      readonly itemSet: any;
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
  "name": "itemSet",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
              (v2/*: any*/)
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
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "14c9d509221de8f2ab09d1991c4380ca",
    "id": null,
    "metadata": {},
    "name": "ContributionRoleSelectQuery",
    "operationKind": "query",
    "text": "query ContributionRoleSelectQuery(\n  $id: ID\n) {\n  contributionRoles(contributableId: $id) {\n    controlledVocabulary {\n      itemSet\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8beab3f3b4f5efd6a0f61d3c8c6d9223";

export default node;
