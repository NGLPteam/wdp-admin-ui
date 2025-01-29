/**
 * @generated SignedSource<<fc07e09e1972d929afeec37321c38ac4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pageTemplatesBrowseCollectionQuery$variables = {
  identifier: string;
  page?: number | null | undefined;
  slug: string;
};
export type pageTemplatesBrowseCollectionQuery$data = {
  readonly collection: {
    readonly ordering: {
      readonly disabled: boolean;
      readonly " $fragmentSpreads": FragmentRefs<"EntityOrderingLayoutFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type pageTemplatesBrowseCollectionQuery = {
  response: pageTemplatesBrowseCollectionQuery$data;
  variables: pageTemplatesBrowseCollectionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "identifier"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v3 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "identifier",
    "variableName": "identifier"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "disabled",
  "storageKey": null
},
v6 = {
  "kind": "Variable",
  "name": "page",
  "variableName": "page"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/)
  ],
  "type": "Sluggable",
  "abstractKey": "__isSluggable"
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v11 = {
  "kind": "InlineFragment",
  "selections": [
    (v10/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v16 = [
  (v8/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "label",
        "storageKey": null
      },
      (v10/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "contributor",
    "plural": false,
    "selections": [
      (v7/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "familyName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "givenName",
                "storageKey": null
              }
            ],
            "type": "PersonContributor",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
          }
        ],
        "type": "AnyContributor",
        "abstractKey": "__isAnyContributor"
      },
      (v11/*: any*/)
    ],
    "storageKey": null
  },
  (v10/*: any*/)
],
v17 = [
  (v10/*: any*/),
  (v8/*: any*/),
  (v12/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "thumbnail",
    "plural": false,
    "selections": [
      {
        "alias": "image",
        "args": null,
        "concreteType": "ImageSize",
        "kind": "LinkedField",
        "name": "large",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageDerivative",
            "kind": "LinkedField",
            "name": "webp",
            "plural": false,
            "selections": [
              (v13/*: any*/),
              (v14/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "width",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "height",
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
        "concreteType": "PageInfo",
        "kind": "LinkedField",
        "name": "pageInfo",
        "plural": false,
        "selections": [
          (v15/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "heroImage",
    "plural": false,
    "selections": [
      {
        "alias": "image",
        "args": null,
        "concreteType": "ImageSize",
        "kind": "LinkedField",
        "name": "large",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageDerivative",
            "kind": "LinkedField",
            "name": "webp",
            "plural": false,
            "selections": [
              (v14/*: any*/),
              (v13/*: any*/)
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
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemAttribution",
            "kind": "LinkedField",
            "name": "attributions",
            "plural": true,
            "selections": (v16/*: any*/),
            "storageKey": null
          }
        ],
        "type": "Item",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CollectionAttribution",
            "kind": "LinkedField",
            "name": "attributions",
            "plural": true,
            "selections": (v16/*: any*/),
            "storageKey": null
          }
        ],
        "type": "Collection",
        "abstractKey": null
      }
    ],
    "type": "AnyEntity",
    "abstractKey": "__isAnyEntity"
  }
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "valid",
  "storageKey": null
},
v21 = [
  (v18/*: any*/),
  (v19/*: any*/),
  (v20/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hidesTemplate",
    "storageKey": null
  }
],
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "treeDepth",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "namespace",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "identifier",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "entry",
  "plural": false,
  "selections": [
    (v7/*: any*/),
    (v9/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v12/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "schemaVersion",
          "plural": false,
          "selections": [
            (v23/*: any*/),
            (v24/*: any*/),
            (v19/*: any*/),
            (v10/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "alias": "schema",
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "schemaVersion",
          "plural": false,
          "selections": [
            (v24/*: any*/),
            (v10/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HierarchicalSchemaRank",
          "kind": "LinkedField",
          "name": "schemaRanks",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "count",
              "storageKey": null
            },
            (v24/*: any*/),
            (v23/*: any*/),
            (v10/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "Collection",
      "abstractKey": null
    },
    (v11/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageTemplatesBrowseCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "ordering",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              {
                "args": [
                  (v6/*: any*/)
                ],
                "kind": "FragmentSpread",
                "name": "EntityOrderingLayoutFragment"
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
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageTemplatesBrowseCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "Ordering",
            "kind": "LinkedField",
            "name": "ordering",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "header",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "OrderingRenderDefinition",
                "kind": "LinkedField",
                "name": "render",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "mode",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "entity",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v9/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  (v6/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "perPage",
                    "value": 40
                  }
                ],
                "concreteType": "OrderingEntryConnection",
                "kind": "LinkedField",
                "name": "children",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrderingEntryEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrderingEntry",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "entry",
                            "plural": false,
                            "selections": [
                              (v7/*: any*/),
                              (v9/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "EntityLayouts",
                                    "kind": "LinkedField",
                                    "name": "layouts",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "ListItemLayoutInstance",
                                        "kind": "LinkedField",
                                        "name": "listItem",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "ListItemTemplateInstance",
                                            "kind": "LinkedField",
                                            "name": "template",
                                            "plural": false,
                                            "selections": [
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": null,
                                                "kind": "LinkedField",
                                                "name": "entity",
                                                "plural": false,
                                                "selections": [
                                                  (v7/*: any*/),
                                                  {
                                                    "kind": "InlineFragment",
                                                    "selections": (v17/*: any*/),
                                                    "type": "Collection",
                                                    "abstractKey": null
                                                  },
                                                  {
                                                    "kind": "InlineFragment",
                                                    "selections": (v17/*: any*/),
                                                    "type": "Item",
                                                    "abstractKey": null
                                                  },
                                                  (v11/*: any*/)
                                                ],
                                                "storageKey": null
                                              },
                                              {
                                                "alias": null,
                                                "args": null,
                                                "concreteType": "ListItemTemplateInstanceSlots",
                                                "kind": "LinkedField",
                                                "name": "slots",
                                                "plural": false,
                                                "selections": [
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "contextFull",
                                                    "plural": false,
                                                    "selections": (v21/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "contextAbbr",
                                                    "plural": false,
                                                    "selections": (v21/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "contextC",
                                                    "plural": false,
                                                    "selections": (v21/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotBlockInstance",
                                                    "kind": "LinkedField",
                                                    "name": "description",
                                                    "plural": false,
                                                    "selections": [
                                                      (v18/*: any*/),
                                                      (v19/*: any*/),
                                                      (v20/*: any*/)
                                                    ],
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "header",
                                                    "plural": false,
                                                    "selections": (v21/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "metaA",
                                                    "plural": false,
                                                    "selections": (v21/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "metaB",
                                                    "plural": false,
                                                    "selections": (v21/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "subheader",
                                                    "plural": false,
                                                    "selections": (v21/*: any*/),
                                                    "storageKey": null
                                                  }
                                                ],
                                                "storageKey": null
                                              },
                                              (v10/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v10/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "type": "Entity",
                                "abstractKey": "__isEntity"
                              },
                              (v11/*: any*/)
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
                      (v15/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "perPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrderingEntry",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v10/*: any*/),
                      (v22/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrderingEntry",
                        "kind": "LinkedField",
                        "name": "ancestors",
                        "plural": true,
                        "selections": [
                          (v10/*: any*/),
                          (v22/*: any*/),
                          (v25/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v25/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2d466baea0fd943eb7e77933dd3b7fb4",
    "id": null,
    "metadata": {},
    "name": "pageTemplatesBrowseCollectionQuery",
    "operationKind": "query",
    "text": "query pageTemplatesBrowseCollectionQuery(\n  $slug: Slug!\n  $identifier: String!\n  $page: Int\n) {\n  collection(slug: $slug) {\n    ordering(identifier: $identifier) {\n      disabled\n      ...EntityOrderingLayoutFragment_2Pg8Wv\n      id\n    }\n    id\n  }\n}\n\nfragment BrowseListLayoutFragment on PageInfo {\n  ...PaginationFragment\n  ...PageCountFragment\n}\n\nfragment BrowseTreeItemFragment on OrderingEntry {\n  treeDepth\n  entry {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Entity {\n      __isEntity: __typename\n      title\n      schemaVersion {\n        namespace\n        identifier\n        kind\n        id\n      }\n    }\n    ...TeasersFragment\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment BrowseTreeLayoutFragment on OrderingEntryConnection {\n  nodes {\n    id\n    treeDepth\n    ancestors {\n      id\n      treeDepth\n      ...BrowseTreeItemFragment\n    }\n    ...BrowseTreeItemFragment\n  }\n  pageInfo {\n    ...PaginationFragment\n    ...PageCountFragment\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    attributions {\n      slug\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Collection {\n    attributions {\n      slug\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment EntityOrderingLayoutFragment_2Pg8Wv on Ordering {\n  name\n  header\n  render {\n    mode\n  }\n  entity {\n    __typename\n    ... on Sluggable {\n      __isSluggable: __typename\n      slug\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  children(page: $page, perPage: 40) {\n    edges {\n      node {\n        id\n        entry {\n          __typename\n          ... on Sluggable {\n            __isSluggable: __typename\n            slug\n          }\n          ...EntitySummaryFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n    pageInfo {\n      ...BrowseListLayoutFragment\n    }\n    ...BrowseTreeLayoutFragment\n  }\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  layouts {\n    listItem {\n      template {\n        ...sharedListItemTemplateFragment\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment PageCountFragment on PageInfo {\n  totalCount\n  page\n  perPage\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment TeasersFragment on Collection {\n  updatedAt\n  schema: schemaVersion {\n    identifier\n    id\n  }\n  schemaRanks {\n    count\n    identifier\n    namespace\n    id\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  content\n  kind\n  valid\n  hidesTemplate\n}\n\nfragment sharedListItemTemplateFragment on ListItemTemplateInstance {\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      id\n      slug\n      title\n      thumbnail {\n        image: large {\n          webp {\n            url\n          }\n        }\n        ...CoverImageFragment\n      }\n      contributors {\n        pageInfo {\n          totalCount\n        }\n      }\n      ...ContributorsListFragment\n      heroImage {\n        image: large {\n          webp {\n            alt\n            url\n          }\n        }\n      }\n    }\n    ... on Item {\n      __typename\n      id\n      slug\n      title\n      thumbnail {\n        image: large {\n          webp {\n            url\n          }\n        }\n        ...CoverImageFragment\n      }\n      contributors {\n        pageInfo {\n          totalCount\n        }\n      }\n      ...ContributorsListFragment\n      heroImage {\n        image: large {\n          webp {\n            alt\n            url\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    contextFull {\n      ...sharedInlineSlotFragment\n    }\n    contextAbbr {\n      ...sharedInlineSlotFragment\n    }\n    contextC {\n      ...sharedInlineSlotFragment\n    }\n    description {\n      ...sharedBlockSlotFragment\n    }\n    header {\n      ...sharedInlineSlotFragment\n    }\n    metaA {\n      ...sharedInlineSlotFragment\n    }\n    metaB {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "be6d99a38f21271a65581cbe0dbed218";

export default node;
