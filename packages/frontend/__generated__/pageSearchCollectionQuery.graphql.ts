/**
 * @generated SignedSource<<146037048168a454dde1b824d8b3ad82>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityOrder = "OLDEST" | "POSITION_ASCENDING" | "POSITION_DESCENDING" | "PUBLISHED_ASCENDING" | "PUBLISHED_DESCENDING" | "RECENT" | "SCHEMA_NAME_ASCENDING" | "SCHEMA_NAME_DESCENDING" | "TITLE_ASCENDING" | "TITLE_DESCENDING" | "%future added value";
export type SearchPredicateInput = {
  and?: AndOperatorInput | null | undefined;
  dateEquals?: DateEqualsOperatorInput | null | undefined;
  dateGTE?: DateGTEOperatorInput | null | undefined;
  dateLTE?: DateLTEOperatorInput | null | undefined;
  equals?: EqualsOperatorInput | null | undefined;
  inAny?: InAnyOperatorInput | null | undefined;
  matches?: MatchesOperatorInput | null | undefined;
  numericGTE?: NumericGTEOperatorInput | null | undefined;
  numericLTE?: NumericLTEOperatorInput | null | undefined;
  or?: OrOperatorInput | null | undefined;
};
export type AndOperatorInput = {
  left: SearchPredicateInput;
  right: SearchPredicateInput;
};
export type DateEqualsOperatorInput = {
  path: string;
  value: string;
};
export type DateGTEOperatorInput = {
  path: string;
  value: string;
};
export type DateLTEOperatorInput = {
  path: string;
  value: string;
};
export type EqualsOperatorInput = {
  path: string;
  value: any;
};
export type InAnyOperatorInput = {
  path: string;
  value: ReadonlyArray<string>;
};
export type MatchesOperatorInput = {
  path: string;
  value: string;
};
export type NumericGTEOperatorInput = {
  path: string;
  value: number;
};
export type NumericLTEOperatorInput = {
  path: string;
  value: number;
};
export type OrOperatorInput = {
  left: SearchPredicateInput;
  right: SearchPredicateInput;
};
export type pageSearchCollectionQuery$variables = {
  order?: EntityOrder | null | undefined;
  page?: number | null | undefined;
  predicates?: ReadonlyArray<SearchPredicateInput> | null | undefined;
  query?: string | null | undefined;
  schema?: ReadonlyArray<string> | null | undefined;
  slug: string;
};
export type pageSearchCollectionQuery$data = {
  readonly collection: {
    readonly " $fragmentSpreads": FragmentRefs<"SearchLayoutEntityFragment">;
  } | null | undefined;
};
export type pageSearchCollectionQuery = {
  response: pageSearchCollectionQuery$data;
  variables: pageSearchCollectionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "order"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "page"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "predicates"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "schema"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "slug"
},
v6 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "slug"
  }
],
v7 = {
  "kind": "Variable",
  "name": "order",
  "variableName": "order"
},
v8 = {
  "kind": "Variable",
  "name": "page",
  "variableName": "page"
},
v9 = {
  "kind": "Variable",
  "name": "predicates",
  "variableName": "predicates"
},
v10 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v11 = {
  "kind": "Variable",
  "name": "schema",
  "variableName": "schema"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v14 = {
  "kind": "InlineFragment",
  "selections": [
    (v12/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v19 = {
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
            (v17/*: any*/),
            (v18/*: any*/),
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
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v21 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "roleLabel",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "contributionRole",
    "plural": false,
    "selections": [
      (v20/*: any*/),
      (v12/*: any*/)
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
      (v13/*: any*/),
      {
        "kind": "TypeDiscriminator",
        "abstractKey": "__isAnyContributor"
      },
      {
        "kind": "InlineFragment",
        "selections": [
          (v15/*: any*/)
        ],
        "type": "Sluggable",
        "abstractKey": "__isSluggable"
      },
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
      },
      (v14/*: any*/)
    ],
    "storageKey": null
  },
  (v12/*: any*/)
],
v22 = [
  {
    "kind": "InlineFragment",
    "selections": [
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemContribution",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": (v21/*: any*/),
            "storageKey": null
          }
        ],
        "type": "ItemContributionConnection",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CollectionContribution",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": (v21/*: any*/),
            "storageKey": null
          }
        ],
        "type": "CollectionContributionConnection",
        "abstractKey": null
      }
    ],
    "type": "Paginated",
    "abstractKey": "__isPaginated"
  }
],
v23 = {
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
            (v18/*: any*/),
            (v17/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "valid",
  "storageKey": null
},
v27 = [
  (v24/*: any*/),
  (v25/*: any*/),
  (v26/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hidesTemplate",
    "storageKey": null
  }
],
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchPath",
  "storageKey": null
},
v29 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "type": "ScalarProperty",
  "abstractKey": "__isScalarProperty"
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchOperators",
  "storageKey": null
},
v32 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SelectOption",
      "kind": "LinkedField",
      "name": "options",
      "plural": true,
      "selections": [
        (v20/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SelectProperty",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageSearchCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          {
            "args": [
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "SearchLayoutEntityFragment"
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
      (v5/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageSearchCollectionQuery",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Collection",
        "kind": "LinkedField",
        "name": "collection",
        "plural": false,
        "selections": [
          (v12/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "SearchScope",
                "kind": "LinkedField",
                "name": "search",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": [
                      (v7/*: any*/),
                      (v8/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "perPage",
                        "value": 20
                      },
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/)
                    ],
                    "concreteType": "SearchResultConnection",
                    "kind": "LinkedField",
                    "name": "results",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SearchResult",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "entity",
                            "plural": false,
                            "selections": [
                              (v13/*: any*/),
                              (v14/*: any*/),
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
                                                  (v13/*: any*/),
                                                  {
                                                    "kind": "InlineFragment",
                                                    "selections": [
                                                      (v12/*: any*/),
                                                      (v15/*: any*/),
                                                      (v16/*: any*/),
                                                      (v19/*: any*/),
                                                      {
                                                        "alias": null,
                                                        "args": null,
                                                        "concreteType": "CollectionContributionConnection",
                                                        "kind": "LinkedField",
                                                        "name": "contributions",
                                                        "plural": false,
                                                        "selections": (v22/*: any*/),
                                                        "storageKey": null
                                                      },
                                                      (v23/*: any*/)
                                                    ],
                                                    "type": "Collection",
                                                    "abstractKey": null
                                                  },
                                                  {
                                                    "kind": "InlineFragment",
                                                    "selections": [
                                                      (v12/*: any*/),
                                                      (v15/*: any*/),
                                                      (v16/*: any*/),
                                                      (v19/*: any*/),
                                                      {
                                                        "alias": null,
                                                        "args": null,
                                                        "concreteType": "ItemContributionConnection",
                                                        "kind": "LinkedField",
                                                        "name": "contributions",
                                                        "plural": false,
                                                        "selections": (v22/*: any*/),
                                                        "storageKey": null
                                                      },
                                                      (v23/*: any*/)
                                                    ],
                                                    "type": "Item",
                                                    "abstractKey": null
                                                  },
                                                  (v14/*: any*/)
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
                                                    "selections": (v27/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "contextAbbr",
                                                    "plural": false,
                                                    "selections": (v27/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "contextC",
                                                    "plural": false,
                                                    "selections": (v27/*: any*/),
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
                                                      (v24/*: any*/),
                                                      (v25/*: any*/),
                                                      (v26/*: any*/)
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
                                                    "selections": (v27/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "metaA",
                                                    "plural": false,
                                                    "selections": (v27/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "metaB",
                                                    "plural": false,
                                                    "selections": (v27/*: any*/),
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "alias": null,
                                                    "args": null,
                                                    "concreteType": "TemplateSlotInlineInstance",
                                                    "kind": "LinkedField",
                                                    "name": "subheader",
                                                    "plural": false,
                                                    "selections": (v27/*: any*/),
                                                    "storageKey": null
                                                  }
                                                ],
                                                "storageKey": null
                                              },
                                              (v12/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v12/*: any*/)
                                        ],
                                        "storageKey": null
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
                          },
                          (v12/*: any*/)
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
                            "name": "totalCount",
                            "storageKey": null
                          },
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
                    "concreteType": "SearchableCoreProperty",
                    "kind": "LinkedField",
                    "name": "coreProperties",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v28/*: any*/),
                          (v29/*: any*/),
                          (v20/*: any*/),
                          (v30/*: any*/),
                          (v31/*: any*/),
                          (v32/*: any*/)
                        ],
                        "type": "SearchableProperty",
                        "abstractKey": "__isSearchableProperty"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "schemas",
                    "args": null,
                    "concreteType": "SchemaVersion",
                    "kind": "LinkedField",
                    "name": "availableSchemaVersions",
                    "plural": true,
                    "selections": [
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
                        "concreteType": "SchemaDefinition",
                        "kind": "LinkedField",
                        "name": "schemaDefinition",
                        "plural": false,
                        "selections": [
                          (v15/*: any*/),
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "searchableProperties",
                        "plural": true,
                        "selections": [
                          (v13/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v28/*: any*/),
                              (v20/*: any*/),
                              (v29/*: any*/),
                              (v30/*: any*/),
                              (v31/*: any*/),
                              (v32/*: any*/)
                            ],
                            "type": "SearchableProperty",
                            "abstractKey": "__isSearchableProperty"
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
                "kind": "TypeDiscriminator",
                "abstractKey": "__isNode"
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
    "cacheID": "face9e4f2d381f0d1cad4b6bda57d1bf",
    "id": null,
    "metadata": {},
    "name": "pageSearchCollectionQuery",
    "operationKind": "query",
    "text": "query pageSearchCollectionQuery(\n  $slug: Slug!\n  $query: String\n  $predicates: [SearchPredicateInput!]\n  $page: Int\n  $order: EntityOrder\n  $schema: [String!]\n) {\n  collection(slug: $slug) {\n    ...SearchLayoutEntityFragment_dJrY9\n    id\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on Paginated {\n  __isPaginated: __typename\n  ... on ItemContributionConnection {\n    nodes {\n      roleLabel\n      contributionRole {\n        label\n        id\n      }\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on CollectionContributionConnection {\n    nodes {\n      roleLabel\n      contributionRole {\n        label\n        id\n      }\n      contributor {\n        __typename\n        ... on Sluggable {\n          __isSluggable: __typename\n          slug\n        }\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  layouts {\n    listItem {\n      template {\n        ...sharedListItemTemplateFragment\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment SearchFilterBooleanFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterDateFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  ... on ScalarProperty {\n    __isScalarProperty: __typename\n    type\n  }\n  ...SearchFilterInputFragment\n  ...SearchFilterSelectFragment\n  ...SearchFilterDateFragment\n  ...SearchFilterNumberFragment\n  ...SearchFilterBooleanFragment\n}\n\nfragment SearchFilterInputFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterNumberFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterSelectFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n  ... on SelectProperty {\n    options {\n      label\n      value\n    }\n  }\n}\n\nfragment SearchFiltersFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n    }\n    ...SearchFilterFragment\n  }\n  ...SearchSchemaFilterFragment\n  schemas: availableSchemaVersions {\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n      ...SearchFilterFragment\n    }\n    id\n  }\n}\n\nfragment SearchLayoutEntityFragment_dJrY9 on Entity {\n  __isEntity: __typename\n  search {\n    results(query: $query, page: $page, perPage: 20, predicates: $predicates, order: $order, schema: $schema) {\n      ...SearchResultsFragment\n    }\n    ...SearchFiltersFragment\n  }\n  ... on Node {\n    __isNode: __typename\n    id\n  }\n}\n\nfragment SearchResultsFragment on SearchResultConnection {\n  nodes {\n    entity {\n      __typename\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n      ...EntitySummaryFragment\n    }\n    id\n  }\n  pageInfo {\n    totalCount\n    ...PaginationFragment\n  }\n}\n\nfragment SearchSchemaFilterFragment on SearchScope {\n  schemas: availableSchemaVersions {\n    name\n    schemaDefinition {\n      slug\n      id\n    }\n    id\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  content\n  kind\n  valid\n  hidesTemplate\n}\n\nfragment sharedListItemTemplateFragment on ListItemTemplateInstance {\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      id\n      slug\n      title\n      thumbnail {\n        image: large {\n          webp {\n            url\n          }\n        }\n        ...CoverImageFragment\n      }\n      contributions {\n        ...ContributorsListFragment\n      }\n      heroImage {\n        image: large {\n          webp {\n            alt\n            url\n          }\n        }\n      }\n    }\n    ... on Item {\n      __typename\n      id\n      slug\n      title\n      thumbnail {\n        image: large {\n          webp {\n            url\n          }\n        }\n        ...CoverImageFragment\n      }\n      contributions {\n        ...ContributorsListFragment\n      }\n      heroImage {\n        image: large {\n          webp {\n            alt\n            url\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    contextFull {\n      ...sharedInlineSlotFragment\n    }\n    contextAbbr {\n      ...sharedInlineSlotFragment\n    }\n    contextC {\n      ...sharedInlineSlotFragment\n    }\n    description {\n      ...sharedBlockSlotFragment\n    }\n    header {\n      ...sharedInlineSlotFragment\n    }\n    metaA {\n      ...sharedInlineSlotFragment\n    }\n    metaB {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4a7680125a053e81b8afbd79826edc02";

export default node;
