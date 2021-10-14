/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemContributionCreateDrawerQueryVariables = {
    slug: string;
};
export type ItemContributionCreateDrawerQueryResponse = {
    readonly item: {
        readonly id: string;
        readonly title: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ContributionCreateFormFragment">;
};
export type ItemContributionCreateDrawerQuery = {
    readonly response: ItemContributionCreateDrawerQueryResponse;
    readonly variables: ItemContributionCreateDrawerQueryVariables;
};



/*
query ItemContributionCreateDrawerQuery(
  $slug: Slug!
) {
  item(slug: $slug) {
    id
    title
  }
  ...ContributionCreateFormFragment
}

fragment CollectionTypeaheadFragment on Query {
  viewer {
    collections {
      nodes {
        id
        title
      }
    }
    id
  }
}

fragment ContributionCreateFormFragment on Query {
  ...ItemTypeaheadFragment
  ...CollectionTypeaheadFragment
  ...ContributorTypeaheadFragment
}

fragment ContributorTypeaheadFragment on Query {
  contributors {
    nodes {
      __typename
      ... on OrganizationContributor {
        id
        legalName
      }
      ... on PersonContributor {
        id
        givenName
        familyName
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}

fragment ItemTypeaheadFragment on Query {
  viewer {
    items {
      nodes {
        id
        title
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
    "name": "slug"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "title",
    "storageKey": null
  }
],
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "slug",
      "variableName": "slug"
    }
  ],
  "concreteType": "Item",
  "kind": "LinkedField",
  "name": "item",
  "plural": false,
  "selections": (v2/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemContributionCreateDrawerQuery",
    "selections": [
      (v3/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContributionCreateFormFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemContributionCreateDrawerQuery",
    "selections": [
      (v3/*: any*/),
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
            "args": null,
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
                "selections": (v2/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
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
                "selections": (v2/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AnyContributorConnection",
        "kind": "LinkedField",
        "name": "contributors",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
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
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "legalName",
                    "storageKey": null
                  }
                ],
                "type": "OrganizationContributor",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/),
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
                  }
                ],
                "type": "PersonContributor",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v1/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
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
    "cacheID": "5ff44ff848020d15bc0f314a61a1eae7",
    "id": null,
    "metadata": {},
    "name": "ItemContributionCreateDrawerQuery",
    "operationKind": "query",
    "text": "query ItemContributionCreateDrawerQuery(\n  $slug: Slug!\n) {\n  item(slug: $slug) {\n    id\n    title\n  }\n  ...ContributionCreateFormFragment\n}\n\nfragment CollectionTypeaheadFragment on Query {\n  viewer {\n    collections {\n      nodes {\n        id\n        title\n      }\n    }\n    id\n  }\n}\n\nfragment ContributionCreateFormFragment on Query {\n  ...ItemTypeaheadFragment\n  ...CollectionTypeaheadFragment\n  ...ContributorTypeaheadFragment\n}\n\nfragment ContributorTypeaheadFragment on Query {\n  contributors {\n    nodes {\n      __typename\n      ... on OrganizationContributor {\n        id\n        legalName\n      }\n      ... on PersonContributor {\n        id\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment ItemTypeaheadFragment on Query {\n  viewer {\n    items {\n      nodes {\n        id\n        title\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '84597557e3bcbbd532efdea8f0a5828c';
export default node;
