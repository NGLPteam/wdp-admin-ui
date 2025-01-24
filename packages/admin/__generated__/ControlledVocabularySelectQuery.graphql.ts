/**
 * @generated SignedSource<<91f6a36c6ad7811fe396fce4ead083d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ControlledVocabularySelectQuery$variables = Record<PropertyKey, never>;
export type ControlledVocabularySelectQuery$data = {
  readonly controlledVocabularies: {
    readonly nodes: ReadonlyArray<{
      readonly id: string;
      readonly name: string;
    }>;
  };
};
export type ControlledVocabularySelectQuery = {
  response: ControlledVocabularySelectQuery$data;
  variables: ControlledVocabularySelectQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyConnection",
    "kind": "LinkedField",
    "name": "controlledVocabularies",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ControlledVocabulary",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ControlledVocabularySelectQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ControlledVocabularySelectQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a9262322e0f1b44b0be42154a5bec68a",
    "id": null,
    "metadata": {},
    "name": "ControlledVocabularySelectQuery",
    "operationKind": "query",
    "text": "query ControlledVocabularySelectQuery {\n  controlledVocabularies {\n    nodes {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a87950a1f10c45d48b2b9a3ddebc4309";

export default node;
