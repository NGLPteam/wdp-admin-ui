/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionContributionCreateDrawerQueryVariables = {
    slug: string;
};
export type CollectionContributionCreateDrawerQueryResponse = {
    readonly collection: {
        readonly id: string;
        readonly title: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ContributionCreateFormFragment">;
};
export type CollectionContributionCreateDrawerQuery = {
    readonly response: CollectionContributionCreateDrawerQueryResponse;
    readonly variables: CollectionContributionCreateDrawerQueryVariables;
};



/*
query CollectionContributionCreateDrawerQuery(
  $slug: Slug!
) {
  collection(slug: $slug) {
    id
    title
  }
  ...ContributionCreateFormFragment
}

fragment ContributionCreateFormFragment on Query {
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
v2 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "slug",
      "variableName": "slug"
    }
  ],
  "concreteType": "Collection",
  "kind": "LinkedField",
  "name": "collection",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
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
    "name": "CollectionContributionCreateDrawerQuery",
    "selections": [
      (v2/*: any*/),
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
    "name": "CollectionContributionCreateDrawerQuery",
    "selections": [
      (v2/*: any*/),
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
    "cacheID": "a8dc5c65d66f670c5b895c95cae9b734",
    "id": null,
    "metadata": {},
    "name": "CollectionContributionCreateDrawerQuery",
    "operationKind": "query",
    "text": "query CollectionContributionCreateDrawerQuery(\n  $slug: Slug!\n) {\n  collection(slug: $slug) {\n    id\n    title\n  }\n  ...ContributionCreateFormFragment\n}\n\nfragment ContributionCreateFormFragment on Query {\n  ...ContributorTypeaheadFragment\n}\n\nfragment ContributorTypeaheadFragment on Query {\n  contributors {\n    nodes {\n      __typename\n      ... on OrganizationContributor {\n        id\n        legalName\n      }\n      ... on PersonContributor {\n        id\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2a2f9a904eed9ad24068f1642ae52d89';
export default node;
