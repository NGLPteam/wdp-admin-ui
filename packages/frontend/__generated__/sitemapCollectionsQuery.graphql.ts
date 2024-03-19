/**
 * @generated SignedSource<<23c1bbeedce3a6441c10920eac768362>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type sitemapCollectionsQuery$variables = {
  slug: string;
};
export type sitemapCollectionsQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"getEntitySitemapFragment">;
  } | null | undefined;
};
export type sitemapCollectionsQuery = {
  response: sitemapCollectionsQuery$data;
  variables: sitemapCollectionsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "perPage",
    "value": 50
  }
],
v5 = [
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
        "name": "pageCount",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": (v4/*: any*/),
  "concreteType": "CollectionConnection",
  "kind": "LinkedField",
  "name": "collections",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": "collections(perPage:50)"
},
v7 = {
  "alias": null,
  "args": (v4/*: any*/),
  "concreteType": "ItemConnection",
  "kind": "LinkedField",
  "name": "items",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": "items(perPage:50)"
},
v8 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v6/*: any*/)
      ],
      "type": "Community",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
        (v3/*: any*/),
        (v7/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "sitemapCollectionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "kind": "InlineDataFragmentSpread",
            "name": "getEntitySitemapFragment",
            "selections": [
              (v8/*: any*/)
            ],
            "args": null,
            "argumentDefinitions": []
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
    "name": "sitemapCollectionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fbbc1e62181bdb6c7cf55a21155dc4e7",
    "id": null,
    "metadata": {},
    "name": "sitemapCollectionsQuery",
    "operationKind": "query",
    "text": "query sitemapCollectionsQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    ...getEntitySitemapFragment\n    id\n  }\n}\n\nfragment getEntitySitemapFragment on AnyEntity {\n  __isAnyEntity: __typename\n  __typename\n  ... on Community {\n    slug\n    updatedAt\n    collections(perPage: 50) {\n      pageInfo {\n        pageCount\n      }\n    }\n  }\n  ... on Collection {\n    slug\n    updatedAt\n    collections(perPage: 50) {\n      pageInfo {\n        pageCount\n      }\n    }\n    items(perPage: 50) {\n      pageInfo {\n        pageCount\n      }\n    }\n  }\n  ... on Item {\n    slug\n    updatedAt\n    items(perPage: 50) {\n      pageInfo {\n        pageCount\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cd73070fa5c27ce6e9361d4b87255625";

export default node;