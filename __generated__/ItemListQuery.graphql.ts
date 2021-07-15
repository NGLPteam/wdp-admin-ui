/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type ItemListQueryVariables = {
    order: SimpleOrder;
    page: number;
};
export type ItemListQueryResponse = {
    readonly viewer: {
        readonly items: {
            readonly nodes: ReadonlyArray<{
                readonly __typename: string;
                readonly id: string;
                readonly identifier: string;
                readonly updatedAt: string;
                readonly createdAt: string;
                readonly title: string | null;
                readonly slug: string;
                readonly allowedActions: ReadonlyArray<string>;
            } | null> | null;
            readonly pageInfo: {
                readonly page: number | null;
                readonly perPage: number | null;
                readonly pageCount: number | null;
                readonly hasNextPage: boolean;
                readonly hasPreviousPage: boolean;
                readonly totalCount: number;
                readonly totalUnfilteredCount: number;
            };
        };
    } | null;
};
export type ItemListQuery = {
    readonly response: ItemListQueryResponse;
    readonly variables: ItemListQueryVariables;
};



/*
query ItemListQuery(
  $order: SimpleOrder!
  $page: Int!
) {
  viewer {
    items(order: $order, page: $page, perPage: 10) {
      nodes {
        __typename
        id
        identifier
        updatedAt
        createdAt
        title
        slug
        allowedActions
      }
      pageInfo {
        page
        perPage
        pageCount
        hasNextPage
        hasPreviousPage
        totalCount
        totalUnfilteredCount
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "order",
      "variableName": "order"
    },
    {
      "kind": "Variable",
      "name": "page",
      "variableName": "page"
    },
    {
      "kind": "Literal",
      "name": "perPage",
      "value": 10
    }
  ],
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        },
        (v1/*: any*/),
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
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "allowedActions",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "page",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "perPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "pageCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasPreviousPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalUnfilteredCount",
          "storageKey": null
        }
      ],
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
    "name": "ItemListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "ItemListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "959aad42b2d1196b7ebd481eb3aecfb0",
    "id": null,
    "metadata": {},
    "name": "ItemListQuery",
    "operationKind": "query",
    "text": "query ItemListQuery(\n  $order: SimpleOrder!\n  $page: Int!\n) {\n  viewer {\n    items(order: $order, page: $page, perPage: 10) {\n      nodes {\n        __typename\n        id\n        identifier\n        updatedAt\n        createdAt\n        title\n        slug\n        allowedActions\n      }\n      pageInfo {\n        page\n        perPage\n        pageCount\n        hasNextPage\n        hasPreviousPage\n        totalCount\n        totalUnfilteredCount\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '2bc38a696951f988c5b9a9f35b9cc496';
export default node;
