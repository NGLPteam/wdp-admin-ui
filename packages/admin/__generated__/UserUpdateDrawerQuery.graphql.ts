/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserUpdateDrawerQueryVariables = {
    userSlug: string;
};
export type UserUpdateDrawerQueryResponse = {
    readonly user: {
        readonly name: string | null;
        readonly " $fragmentRefs": FragmentRefs<"UserUpdateFormFragment">;
    } | null;
};
export type UserUpdateDrawerQuery = {
    readonly response: UserUpdateDrawerQueryResponse;
    readonly variables: UserUpdateDrawerQueryVariables;
};



/*
query UserUpdateDrawerQuery(
  $userSlug: Slug!
) {
  user(slug: $userSlug) {
    name
    ...UserUpdateFormFragment
    id
  }
}

fragment UserUpdateFormFragment on User {
  id
  givenName
  familyName
  email
  username
  avatar {
    small {
      png {
        url
        alt
        height
        width
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "userSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserUpdateFormFragment"
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
    "name": "UserUpdateDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "name": "givenName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "familyName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AssetPreview",
            "kind": "LinkedField",
            "name": "avatar",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PreviewImageMap",
                "kind": "LinkedField",
                "name": "small",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PreviewImage",
                    "kind": "LinkedField",
                    "name": "png",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "alt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "height",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "width",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8d90da5d58ffd202dfb37c453478b34e",
    "id": null,
    "metadata": {},
    "name": "UserUpdateDrawerQuery",
    "operationKind": "query",
    "text": "query UserUpdateDrawerQuery(\n  $userSlug: Slug!\n) {\n  user(slug: $userSlug) {\n    name\n    ...UserUpdateFormFragment\n    id\n  }\n}\n\nfragment UserUpdateFormFragment on User {\n  id\n  givenName\n  familyName\n  email\n  username\n  avatar {\n    small {\n      png {\n        url\n        alt\n        height\n        width\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '00f52570524b1f973dddc9640f107977';
export default node;
