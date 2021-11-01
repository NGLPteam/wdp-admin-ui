/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type pagesManageSlugCommunityPagesQueryVariables = {
    communitySlug: string;
    page: number;
};
export type pagesManageSlugCommunityPagesQueryResponse = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"EntityPagesListFragment" | "CommunityLayoutQueryFragment">;
    } | null;
};
export type pagesManageSlugCommunityPagesQuery = {
    readonly response: pagesManageSlugCommunityPagesQueryResponse;
    readonly variables: pagesManageSlugCommunityPagesQueryVariables;
};



/*
query pagesManageSlugCommunityPagesQuery(
  $communitySlug: Slug!
  $page: Int!
) {
  community(slug: $communitySlug) {
    ...EntityPagesListFragment
    ...CommunityLayoutQueryFragment
    id
  }
}

fragment CommunityLayoutFragment on Community {
  name
  slug
}

fragment CommunityLayoutQueryFragment on Community {
  ...CommunityLayoutFragment
}

fragment EntityPagesListDataFragment on PageConnection {
  edges {
    node {
      slug
      id
    }
  }
  ...ModelListPageFragment
}

fragment EntityPagesListFragment on AnyEntity {
  __isAnyEntity: __typename
  ... on Community {
    slug
    pages(page: $page) {
      ...EntityPagesListDataFragment
    }
  }
  ... on Collection {
    slug
    pages(page: $page) {
      ...EntityPagesListDataFragment
    }
  }
  ... on Item {
    slug
    pages(page: $page) {
      ...EntityPagesListDataFragment
    }
  }
}

fragment ModelListPageFragment on Paginated {
  __isPaginated: __typename
  ...ModelPageCountActionsFragment
  ...ModelPaginationFragment
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
    "name": "communitySlug"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "page"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "communitySlug"
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
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page"
      }
    ],
    "concreteType": "PageConnection",
    "kind": "LinkedField",
    "name": "pages",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PageEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Page",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesManageSlugCommunityPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EntityPagesListFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityLayoutQueryFragment"
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
    "name": "pagesManageSlugCommunityPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Community",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Collection",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Item",
                "abstractKey": null
              }
            ],
            "type": "AnyEntity",
            "abstractKey": "__isAnyEntity"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4e7ff86edd4a573115a7960f68ba17ea",
    "id": null,
    "metadata": {},
    "name": "pagesManageSlugCommunityPagesQuery",
    "operationKind": "query",
    "text": "query pagesManageSlugCommunityPagesQuery(\n  $communitySlug: Slug!\n  $page: Int!\n) {\n  community(slug: $communitySlug) {\n    ...EntityPagesListFragment\n    ...CommunityLayoutQueryFragment\n    id\n  }\n}\n\nfragment CommunityLayoutFragment on Community {\n  name\n  slug\n}\n\nfragment CommunityLayoutQueryFragment on Community {\n  ...CommunityLayoutFragment\n}\n\nfragment EntityPagesListDataFragment on PageConnection {\n  edges {\n    node {\n      slug\n      id\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment EntityPagesListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Community {\n    slug\n    pages(page: $page) {\n      ...EntityPagesListDataFragment\n    }\n  }\n  ... on Collection {\n    slug\n    pages(page: $page) {\n      ...EntityPagesListDataFragment\n    }\n  }\n  ... on Item {\n    slug\n    pages(page: $page) {\n      ...EntityPagesListDataFragment\n    }\n  }\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();
(node as any).hash = '7d4a8bbc1d33bc9e1c4c6253eb536bd1';
export default node;
