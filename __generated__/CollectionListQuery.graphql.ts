/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type EntityKind = "COLLECTION" | "COMMUNITY" | "ITEM" | "%future added value";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type CollectionListQueryVariables = {
    order: SimpleOrder;
};
export type CollectionListQueryResponse = {
    readonly viewer: {
        readonly collections: {
            readonly nodes: ReadonlyArray<{
                readonly __typename: string;
                readonly id: string;
                readonly identifier: string;
                readonly title: string | null;
                readonly slug: unknown;
                readonly allowedActions: ReadonlyArray<string>;
                readonly hierarchicalDepth: number;
                readonly breadcrumbs: ReadonlyArray<{
                    readonly depth: number;
                    readonly label: string;
                    readonly kind: EntityKind;
                    readonly slug: string;
                    readonly crumb: {
                        readonly __typename: string;
                        readonly hierarchicalDepth?: number;
                        readonly allowedActions?: ReadonlyArray<string>;
                        readonly name?: string;
                        readonly title?: string | null;
                        readonly breadcrumbs?: ReadonlyArray<{
                            readonly depth: number;
                            readonly label: string;
                            readonly kind: EntityKind;
                            readonly slug: string;
                        }>;
                    };
                }>;
            } | null> | null;
        };
    } | null;
};
export type CollectionListQuery = {
    readonly response: CollectionListQueryResponse;
    readonly variables: CollectionListQueryVariables;
};



/*
query CollectionListQuery(
  $order: SimpleOrder!
) {
  viewer {
    collections(access: READ_ONLY, order: $order) {
      nodes {
        __typename
        id
        identifier
        title
        slug
        allowedActions
        hierarchicalDepth
        breadcrumbs {
          depth
          label
          kind
          slug
          crumb {
            __typename
            ... on Entity {
              __isEntity: __typename
              hierarchicalDepth
              allowedActions
            }
            ... on Community {
              name
            }
            ... on Collection {
              title
            }
            ... on Item {
              title
              breadcrumbs {
                depth
                label
                kind
                slug
                id
              }
            }
            ... on Node {
              __isNode: __typename
              id
            }
          }
          id
        }
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "order"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "access",
    "value": "READ_ONLY"
  },
  {
    "kind": "Variable",
    "name": "order",
    "variableName": "order"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "allowedActions",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hierarchicalDepth",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "depth",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v12 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/),
    (v7/*: any*/)
  ],
  "type": "Entity",
  "abstractKey": "__isEntity"
},
v13 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Community",
  "abstractKey": null
},
v14 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
  ],
  "type": "Collection",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "CollectionConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EntityBreadcrumb",
                    "kind": "LinkedField",
                    "name": "breadcrumbs",
                    "plural": true,
                    "selections": [
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "crumb",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "EntityBreadcrumb",
                                "kind": "LinkedField",
                                "name": "breadcrumbs",
                                "plural": true,
                                "selections": [
                                  (v9/*: any*/),
                                  (v10/*: any*/),
                                  (v11/*: any*/),
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Item",
                            "abstractKey": null
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
    "name": "CollectionListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "CollectionConnection",
            "kind": "LinkedField",
            "name": "collections",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EntityBreadcrumb",
                    "kind": "LinkedField",
                    "name": "breadcrumbs",
                    "plural": true,
                    "selections": [
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "crumb",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "EntityBreadcrumb",
                                "kind": "LinkedField",
                                "name": "breadcrumbs",
                                "plural": true,
                                "selections": [
                                  (v9/*: any*/),
                                  (v10/*: any*/),
                                  (v11/*: any*/),
                                  (v6/*: any*/),
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "Item",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v3/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
                          }
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
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
    "cacheID": "9a5f89f5f722a974d61ff494ffe6fc65",
    "id": null,
    "metadata": {},
    "name": "CollectionListQuery",
    "operationKind": "query",
    "text": "query CollectionListQuery(\n  $order: SimpleOrder!\n) {\n  viewer {\n    collections(access: READ_ONLY, order: $order) {\n      nodes {\n        __typename\n        id\n        identifier\n        title\n        slug\n        allowedActions\n        hierarchicalDepth\n        breadcrumbs {\n          depth\n          label\n          kind\n          slug\n          crumb {\n            __typename\n            ... on Entity {\n              __isEntity: __typename\n              hierarchicalDepth\n              allowedActions\n            }\n            ... on Community {\n              name\n            }\n            ... on Collection {\n              title\n            }\n            ... on Item {\n              title\n              breadcrumbs {\n                depth\n                label\n                kind\n                slug\n                id\n              }\n            }\n            ... on Node {\n              __isNode: __typename\n              id\n            }\n          }\n          id\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '9fad4f5c82e47d629de6dd4e37d9ada2';
export default node;
