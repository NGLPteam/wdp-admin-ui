/**
 * @generated SignedSource<<e8c0a8f09eddd7f020fdc957cdab131f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GrantAccessInput = {
  clientMutationId?: string | null | undefined;
  entityId: string;
  roleId: string;
  userId: string;
};
export type RoleEditAccessFormMutation$variables = {
  input: GrantAccessInput;
};
export type RoleEditAccessFormMutation$data = {
  readonly grantAccess: {
    readonly " $fragmentSpreads": FragmentRefs<"MutationForm_mutationErrors">;
  } | null | undefined;
};
export type RoleEditAccessFormMutation = {
  response: RoleEditAccessFormMutation$data;
  variables: RoleEditAccessFormMutation$variables;
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
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v3 = [
  {
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
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserError",
        "kind": "LinkedField",
        "name": "errors",
        "plural": true,
        "selections": (v2/*: any*/),
        "storageKey": null
      }
    ],
    "type": "StandardMutationPayload",
    "abstractKey": "__isStandardMutationPayload"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RoleEditAccessFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GrantAccessPayload",
        "kind": "LinkedField",
        "name": "grantAccess",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "MutationForm_mutationErrors",
            "selections": (v3/*: any*/),
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
    "name": "RoleEditAccessFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "GrantAccessPayload",
        "kind": "LinkedField",
        "name": "grantAccess",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "77740aa3b5179bf4f6f21a7b26af2432",
    "id": null,
    "metadata": {},
    "name": "RoleEditAccessFormMutation",
    "operationKind": "mutation",
    "text": "mutation RoleEditAccessFormMutation(\n  $input: GrantAccessInput!\n) {\n  grantAccess(input: $input) {\n    ...MutationForm_mutationErrors\n  }\n}\n\nfragment MutationForm_mutationErrors on StandardMutationPayload {\n  __isStandardMutationPayload: __typename\n  attributeErrors {\n    path\n    type\n    messages\n  }\n  globalErrors {\n    message\n  }\n  errors {\n    message\n  }\n}\n"
  }
};
})();

(node as any).hash = "5be5474767286c92b7dcd50f2dc154f8";

export default node;
