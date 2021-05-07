/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SimpleOrder = "OLDEST" | "RECENT" | "%future added value";
export type CollectionListQueryVariables = {
    order: SimpleOrder;
};
export type CollectionListQueryResponse = {
    readonly collections: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"CollectionCardFragment">;
            } | null;
        } | null> | null;
    };
};
export type CollectionListQuery = {
    readonly response: CollectionListQueryResponse;
    readonly variables: CollectionListQueryVariables;
};



/*
query CollectionListQuery(
  $order: SimpleOrder!
) {
  collections(order: $order) {
    edges {
      node {
        ...CollectionCardFragment
        id
      }
    }
  }
}

fragment CollectionCardFragment on Collection {
  slug
  title
  description
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
    "kind": "Variable",
    "name": "order",
    "variableName": "order"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionListQuery",
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
            "concreteType": "CollectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CollectionCardFragment"
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
        "args": (v1/*: any*/),
        "concreteType": "CollectionConnection",
        "kind": "LinkedField",
        "name": "collections",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CollectionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Collection",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
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
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0e39c442ea5ad7e107dfe96a56e72780",
    "id": null,
    "metadata": {},
    "name": "CollectionListQuery",
    "operationKind": "query",
    "text": "query CollectionListQuery(\n  $order: SimpleOrder!\n) {\n  collections(order: $order) {\n    edges {\n      node {\n        ...CollectionCardFragment\n        id\n      }\n    }\n  }\n}\n\nfragment CollectionCardFragment on Collection {\n  slug\n  title\n  description\n}\n"
  }
};
})();
(node as any).hash = '677172ff0a324a32d1ca7cc0b3a9712c';
export default node;
