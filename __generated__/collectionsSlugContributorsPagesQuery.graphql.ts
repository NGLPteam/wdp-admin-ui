/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type collectionsSlugContributorsPagesQueryVariables = {
    contributorSlug: string;
};
export type collectionsSlugContributorsPagesQueryResponse = {
    readonly contributor: {
        readonly __typename: string;
        readonly collectionContributions?: {
            readonly " $fragmentRefs": FragmentRefs<"CollectionContributionListFragment">;
        };
        readonly " $fragmentRefs": FragmentRefs<"ContributorLayoutFragment">;
    } | null;
};
export type collectionsSlugContributorsPagesQuery = {
    readonly response: collectionsSlugContributorsPagesQueryResponse;
    readonly variables: collectionsSlugContributorsPagesQueryVariables;
};



/*
query collectionsSlugContributorsPagesQuery(
  $contributorSlug: Slug!
) {
  contributor(slug: $contributorSlug) {
    __typename
    ...ContributorLayoutFragment
    ... on OrganizationContributor {
      collectionContributions {
        ...CollectionContributionListFragment
      }
    }
    ... on PersonContributor {
      collectionContributions {
        ...CollectionContributionListFragment
      }
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment CollectionContributionListFragment on CollectionContributionConnection {
  nodes {
    slug
    createdAt
    updatedAt
    role
    collection {
      title
      slug
      id
    }
    id
  }
  ...ModelPaginationFragment
  ...ModelPageCountActionsFragment
}

fragment ContributorLayoutFragment on AnyContributor {
  __isAnyContributor: __typename
  __typename
  ... on OrganizationContributor {
    slug
    legalName
  }
  ... on PersonContributor {
    givenName
    familyName
  }
}

fragment ModelPageCountActionsFragment on Paginated {
  __isPaginated: __typename
  pageInfo {
    page
    pageCount
    perPage
    hasNextPage
    hasPreviousPage
    totalCount
    totalUnfilteredCount
  }
}

fragment ModelPaginationFragment on Paginated {
  __isPaginated: __typename
  pageInfo {
    page
    pageCount
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contributorSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "contributorSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "CollectionContributionConnection",
    "kind": "LinkedField",
    "name": "collectionContributions",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CollectionContributionListFragment"
      }
    ],
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "CollectionContributionConnection",
  "kind": "LinkedField",
  "name": "collectionContributions",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionContribution",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v4/*: any*/),
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
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "role",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
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
            (v4/*: any*/),
            (v5/*: any*/)
          ],
          "storageKey": null
        },
        (v5/*: any*/)
      ],
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
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
              "name": "pageCount",
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
      "type": "Paginated",
      "abstractKey": "__isPaginated"
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "collectionsSlugContributorsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContributorLayoutFragment"
          },
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "PersonContributor",
            "abstractKey": null
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
    "name": "collectionsSlugContributorsPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "contributor",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isAnyContributor"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "legalName",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "type": "OrganizationContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
              (v6/*: any*/)
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/)
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "47f55579f2a6d142b624c567d85baac2",
    "id": null,
    "metadata": {},
    "name": "collectionsSlugContributorsPagesQuery",
    "operationKind": "query",
    "text": "query collectionsSlugContributorsPagesQuery(\n  $contributorSlug: Slug!\n) {\n  contributor(slug: $contributorSlug) {\n    __typename\n    ...ContributorLayoutFragment\n    ... on OrganizationContributor {\n      collectionContributions {\n        ...CollectionContributionListFragment\n      }\n    }\n    ... on PersonContributor {\n      collectionContributions {\n        ...CollectionContributionListFragment\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment CollectionContributionListFragment on CollectionContributionConnection {\n  nodes {\n    slug\n    createdAt\n    updatedAt\n    role\n    collection {\n      title\n      slug\n      id\n    }\n    id\n  }\n  ...ModelPaginationFragment\n  ...ModelPageCountActionsFragment\n}\n\nfragment ContributorLayoutFragment on AnyContributor {\n  __isAnyContributor: __typename\n  __typename\n  ... on OrganizationContributor {\n    slug\n    legalName\n  }\n  ... on PersonContributor {\n    givenName\n    familyName\n  }\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n    totalUnfilteredCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e3ebafe6deee356b89f540d305817830';
export default node;
