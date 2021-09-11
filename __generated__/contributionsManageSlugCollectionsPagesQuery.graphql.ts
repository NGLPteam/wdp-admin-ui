/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type contributionsManageSlugCollectionsPagesQueryVariables = {
    collectionSlug: string;
};
export type contributionsManageSlugCollectionsPagesQueryResponse = {
    readonly collection: {
        readonly " $fragmentRefs": FragmentRefs<"CollectionLayoutFragment">;
    } | null;
};
export type contributionsManageSlugCollectionsPagesQuery = {
    readonly response: contributionsManageSlugCollectionsPagesQueryResponse;
    readonly variables: contributionsManageSlugCollectionsPagesQueryVariables;
};



/*
query contributionsManageSlugCollectionsPagesQuery(
  $collectionSlug: Slug!
) {
  collection(slug: $collectionSlug) {
    ...CollectionLayoutFragment
    id
  }
}

fragment CollectionLayoutFragment on Collection {
  title
  slug
  ...useBreadcrumbsFragment
}

fragment useBreadcrumbsFragment on Entity {
  __isEntity: __typename
  breadcrumbs {
    depth
    label
    kind
    slug
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "collectionSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "collectionSlug"
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "contributionsManageSlugCollectionsPagesQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionLayoutFragment"
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
    "name": "contributionsManageSlugCollectionsPagesQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "EntityBreadcrumb",
                "kind": "LinkedField",
                "name": "breadcrumbs",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "depth",
                    "storageKey": null
                  },
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
                    "name": "kind",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Entity",
            "abstractKey": "__isEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ea2944f06cf136afa2b78e36d59f9ef4",
    "id": null,
    "metadata": {},
    "name": "contributionsManageSlugCollectionsPagesQuery",
    "operationKind": "query",
    "text": "query contributionsManageSlugCollectionsPagesQuery(\n  $collectionSlug: Slug!\n) {\n  collection(slug: $collectionSlug) {\n    ...CollectionLayoutFragment\n    id\n  }\n}\n\nfragment CollectionLayoutFragment on Collection {\n  title\n  slug\n  ...useBreadcrumbsFragment\n}\n\nfragment useBreadcrumbsFragment on Entity {\n  __isEntity: __typename\n  breadcrumbs {\n    depth\n    label\n    kind\n    slug\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '61faf794554346fbaed9ff119171cefc';
export default node;
