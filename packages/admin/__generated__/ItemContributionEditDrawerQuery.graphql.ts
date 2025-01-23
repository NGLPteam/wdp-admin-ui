/**
 * @generated SignedSource<<4af690ad9ce2bb06b9db72a5d4b86264>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemContributionEditDrawerQuery$variables = {
  itemContributionSlug: string;
};
export type ItemContributionEditDrawerQuery$data = {
  readonly itemContribution: {
    readonly id: string;
    readonly item: {
      readonly title: string;
    };
    readonly role: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ContributionUpdateFormFragment">;
  } | null | undefined;
};
export type ItemContributionEditDrawerQuery = {
  response: ItemContributionEditDrawerQuery$data;
  variables: ItemContributionEditDrawerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "itemContributionSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "itemContributionSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "role",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = [
  (v4/*: any*/),
  (v2/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": "contributionId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v8/*: any*/),
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
        (v8/*: any*/),
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
        (v2/*: any*/)
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "ControlledVocabularyItem",
  "kind": "LinkedField",
  "name": "contributionRole",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v11 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "position",
    "storageKey": null
  }
],
v12 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v11/*: any*/),
      "type": "CollectionContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v11/*: any*/),
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContribution",
  "abstractKey": "__isAnyContribution"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemContributionEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemContribution",
        "kind": "LinkedField",
        "name": "itemContribution",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributionUpdateFormFragment"
          },
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": [
              (v4/*: any*/)
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
    "name": "ItemContributionEditDrawerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemContribution",
        "kind": "LinkedField",
        "name": "itemContribution",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "item",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v6/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v7/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Collection",
                    "kind": "LinkedField",
                    "name": "collection",
                    "plural": false,
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  },
                  (v10/*: any*/),
                  (v12/*: any*/)
                ],
                "type": "CollectionContribution",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v7/*: any*/),
                  (v9/*: any*/),
                  (v4/*: any*/),
                  (v10/*: any*/),
                  (v12/*: any*/)
                ],
                "type": "ItemContribution",
                "abstractKey": null
              }
            ],
            "type": "AnyContribution",
            "abstractKey": "__isAnyContribution"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d5454308ef9d674907da33d7b06e442f",
    "id": null,
    "metadata": {},
    "name": "ItemContributionEditDrawerQuery",
    "operationKind": "query",
    "text": "query ItemContributionEditDrawerQuery(\n  $itemContributionSlug: Slug!\n) {\n  itemContribution(slug: $itemContributionSlug) {\n    ...ContributionUpdateFormFragment\n    id\n    role\n    item {\n      title\n      id\n    }\n  }\n}\n\nfragment ContributionUpdateFormFieldsFragment on AnyContribution {\n  __isAnyContribution: __typename\n  ... on CollectionContribution {\n    position\n  }\n  ... on ItemContribution {\n    position\n  }\n}\n\nfragment ContributionUpdateFormFragment on AnyContribution {\n  __isAnyContribution: __typename\n  __typename\n  ... on CollectionContribution {\n    contributionId: id\n    contributor {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        legalName\n      }\n      ... on PersonContributor {\n        slug\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    collection {\n      title\n      id\n    }\n    contributionRole {\n      id\n      label\n    }\n    ...ContributionUpdateFormFieldsFragment\n  }\n  ... on ItemContribution {\n    contributionId: id\n    contributor {\n      __typename\n      ... on OrganizationContributor {\n        slug\n        legalName\n      }\n      ... on PersonContributor {\n        slug\n        givenName\n        familyName\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    item {\n      title\n      id\n    }\n    title\n    contributionRole {\n      id\n      label\n    }\n    ...ContributionUpdateFormFieldsFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "ae71602af58a7cd4f8c1cace914f12d9";

export default node;
