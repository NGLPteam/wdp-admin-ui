/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type membersManageSlugCommunitiesPagesQueryVariables = {
    communitySlug: string;
    page: number;
};
export type membersManageSlugCommunitiesPagesQueryResponse = {
    readonly community: {
        readonly " $fragmentRefs": FragmentRefs<"CommunityLayoutQueryFragment" | "CommunityMemberListFragment">;
    } | null;
};
export type membersManageSlugCommunitiesPagesQuery = {
    readonly response: membersManageSlugCommunitiesPagesQueryResponse;
    readonly variables: membersManageSlugCommunitiesPagesQueryVariables;
};



/*
query membersManageSlugCommunitiesPagesQuery(
  $communitySlug: Slug!
  $page: Int!
) {
  community(slug: $communitySlug) {
    ...CommunityLayoutQueryFragment
    ...CommunityMemberListFragment
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

fragment CommunityMemberListDataFragment on ContextualPermissionConnection {
  edges {
    node {
      id
      roles {
        name
        id
      }
      user {
        name
        email
        id
      }
    }
  }
  ...ModelListPageFragment
}

fragment CommunityMemberListFragment on Entity {
  __isEntity: __typename
  allowedActions
  assignedUsers(order: USER_NAME_ASC, page: $page, perPage: 20) {
    ...CommunityMemberListDataFragment
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
  "name": "name",
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
    "name": "membersManageSlugCommunitiesPagesQuery",
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
            "name": "CommunityLayoutQueryFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommunityMemberListFragment"
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
    "name": "membersManageSlugCommunitiesPagesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Community",
        "kind": "LinkedField",
        "name": "community",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "allowedActions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "order",
                    "value": "USER_NAME_ASC"
                  },
                  {
                    "kind": "Variable",
                    "name": "page",
                    "variableName": "page"
                  },
                  {
                    "kind": "Literal",
                    "name": "perPage",
                    "value": 20
                  }
                ],
                "concreteType": "ContextualPermissionConnection",
                "kind": "LinkedField",
                "name": "assignedUsers",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ContextualPermissionEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ContextualPermission",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Role",
                            "kind": "LinkedField",
                            "name": "roles",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "email",
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
    "cacheID": "41cc411b55b28fba8ea7f9997c728709",
    "id": null,
    "metadata": {},
    "name": "membersManageSlugCommunitiesPagesQuery",
    "operationKind": "query",
    "text": "query membersManageSlugCommunitiesPagesQuery(\n  $communitySlug: Slug!\n  $page: Int!\n) {\n  community(slug: $communitySlug) {\n    ...CommunityLayoutQueryFragment\n    ...CommunityMemberListFragment\n    id\n  }\n}\n\nfragment CommunityLayoutFragment on Community {\n  name\n  slug\n}\n\nfragment CommunityLayoutQueryFragment on Community {\n  ...CommunityLayoutFragment\n}\n\nfragment CommunityMemberListDataFragment on ContextualPermissionConnection {\n  edges {\n    node {\n      id\n      roles {\n        name\n        id\n      }\n      user {\n        name\n        email\n        id\n      }\n    }\n  }\n  ...ModelListPageFragment\n}\n\nfragment CommunityMemberListFragment on Entity {\n  __isEntity: __typename\n  allowedActions\n  assignedUsers(order: USER_NAME_ASC, page: $page, perPage: 20) {\n    ...CommunityMemberListDataFragment\n  }\n}\n\nfragment ModelListPageFragment on Paginated {\n  __isPaginated: __typename\n  ...ModelPageCountActionsFragment\n  ...ModelPaginationFragment\n}\n\nfragment ModelPageCountActionsFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n    perPage\n    hasNextPage\n    hasPreviousPage\n    totalCount\n  }\n}\n\nfragment ModelPaginationFragment on Paginated {\n  __isPaginated: __typename\n  pageInfo {\n    page\n    pageCount\n  }\n}\n"
  }
};
})();
(node as any).hash = 'da391c071c94b85fd0f4589ffa346799';
export default node;
