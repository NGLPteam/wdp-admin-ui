/**
 * @generated SignedSource<<eba6bc71215f9e8b63cffe0b43ad918b>>
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
export type pageSearchQuery$variables = {
  order?: EntityOrder | null | undefined;
  page?: number | null | undefined;
  predicates?: ReadonlyArray<SearchPredicateInput> | null | undefined;
  query?: string | null | undefined;
  schema?: ReadonlyArray<string> | null | undefined;
};
export type pageSearchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppBodyFragment" | "SearchLayoutFragment">;
};
export type pageSearchQuery = {
  response: pageSearchQuery$data;
  variables: pageSearchQuery$variables;
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
  "kind": "Variable",
  "name": "order",
  "variableName": "order"
},
v6 = {
  "kind": "Variable",
  "name": "page",
  "variableName": "page"
},
v7 = {
  "kind": "Variable",
  "name": "predicates",
  "variableName": "predicates"
},
v8 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v9 = {
  "kind": "Variable",
  "name": "schema",
  "variableName": "schema"
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v12 = {
  "kind": "InlineFragment",
  "selections": [
    (v11/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "alt",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v20 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      (v19/*: any*/)
    ],
    "storageKey": null
  }
],
v21 = [
  (v16/*: any*/),
  (v15/*: any*/)
],
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v23 = [
  (v13/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "roles",
    "plural": true,
    "selections": [
      (v22/*: any*/),
      (v11/*: any*/)
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
      (v10/*: any*/),
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
      (v12/*: any*/)
    ],
    "storageKey": null
  },
  (v11/*: any*/)
],
v24 = [
  (v11/*: any*/),
  (v13/*: any*/),
  (v14/*: any*/),
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
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/)
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
    "selections": (v20/*: any*/),
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
            "selections": (v21/*: any*/),
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
            "selections": (v23/*: any*/),
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
            "selections": (v23/*: any*/),
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
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "kind",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "valid",
  "storageKey": null
},
v28 = [
  (v25/*: any*/),
  (v26/*: any*/),
  (v27/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hidesTemplate",
    "storageKey": null
  }
],
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchPath",
  "storageKey": null
},
v30 = {
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
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "searchOperators",
  "storageKey": null
},
v33 = {
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
        (v22/*: any*/),
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
},
v34 = [
  {
    "kind": "Literal",
    "name": "order",
    "value": "POSITION_ASCENDING"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "pageSearchQuery",
    "selections": [
      {
        "args": [
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "SearchLayoutFragment"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AppBodyFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "pageSearchQuery",
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
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "kind": "Literal",
                "name": "perPage",
                "value": 20
              },
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
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
                      (v10/*: any*/),
                      (v12/*: any*/),
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
                                          (v10/*: any*/),
                                          {
                                            "kind": "InlineFragment",
                                            "selections": (v24/*: any*/),
                                            "type": "Collection",
                                            "abstractKey": null
                                          },
                                          {
                                            "kind": "InlineFragment",
                                            "selections": (v24/*: any*/),
                                            "type": "Item",
                                            "abstractKey": null
                                          },
                                          (v12/*: any*/)
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
                                            "selections": (v28/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "contextAbbr",
                                            "plural": false,
                                            "selections": (v28/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "contextC",
                                            "plural": false,
                                            "selections": (v28/*: any*/),
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
                                              (v25/*: any*/),
                                              (v26/*: any*/),
                                              (v27/*: any*/)
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
                                            "selections": (v28/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "metaA",
                                            "plural": false,
                                            "selections": (v28/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "metaB",
                                            "plural": false,
                                            "selections": (v28/*: any*/),
                                            "storageKey": null
                                          },
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "TemplateSlotInlineInstance",
                                            "kind": "LinkedField",
                                            "name": "subheader",
                                            "plural": false,
                                            "selections": (v28/*: any*/),
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v11/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v11/*: any*/)
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
                  (v11/*: any*/)
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
                  (v19/*: any*/),
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
                  (v29/*: any*/),
                  (v30/*: any*/),
                  (v22/*: any*/),
                  (v31/*: any*/),
                  (v32/*: any*/),
                  (v33/*: any*/)
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
                  (v13/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "searchableProperties",
                "plural": true,
                "selections": [
                  (v10/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v29/*: any*/),
                      (v22/*: any*/),
                      (v30/*: any*/),
                      (v31/*: any*/),
                      (v32/*: any*/),
                      (v33/*: any*/)
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
        "alias": null,
        "args": (v34/*: any*/),
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": (v20/*: any*/),
        "storageKey": "communities(order:\"POSITION_ASCENDING\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "GlobalConfiguration",
        "kind": "LinkedField",
        "name": "globalConfiguration",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SiteSettings",
            "kind": "LinkedField",
            "name": "site",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "logoMode",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "installationName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SiteLogoAttachment",
            "kind": "LinkedField",
            "name": "logo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "storage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageOriginal",
                "kind": "LinkedField",
                "name": "original",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "originalFilename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v16/*: any*/),
                      (v15/*: any*/),
                      (v17/*: any*/),
                      (v18/*: any*/)
                    ],
                    "type": "Image",
                    "abstractKey": "__isImage"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ImageSize",
                "kind": "LinkedField",
                "name": "sansText",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "size",
                    "storageKey": null
                  },
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
                        "kind": "InlineFragment",
                        "selections": (v21/*: any*/),
                        "type": "Image",
                        "abstractKey": "__isImage"
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
          (v11/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "pickerCommunities",
        "args": (v34/*: any*/),
        "concreteType": "CommunityConnection",
        "kind": "LinkedField",
        "name": "communities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CommunityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Community",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v11/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "communities(order:\"POSITION_ASCENDING\")"
      }
    ]
  },
  "params": {
    "cacheID": "af450bf0e280b9173aa76199cb886be9",
    "id": null,
    "metadata": {},
    "name": "pageSearchQuery",
    "operationKind": "query",
    "text": "query pageSearchQuery(\n  $query: String\n  $predicates: [SearchPredicateInput!]\n  $page: Int\n  $order: EntityOrder\n  $schema: [String!]\n) {\n  ...SearchLayoutFragment_dJrY9\n  ...AppBodyFragment\n}\n\nfragment AppBodyFragment on Query {\n  ...AppHeaderFragment\n  ...AppFooterFragment\n}\n\nfragment AppFooterFragment on Query {\n  communities(order: POSITION_ASCENDING) {\n    pageInfo {\n      totalCount\n    }\n  }\n  globalConfiguration {\n    ...InstallationNameFragment\n    id\n  }\n  ...CommunityPickerFragment\n}\n\nfragment AppHeaderFragment on Query {\n  communities(order: POSITION_ASCENDING) {\n    pageInfo {\n      totalCount\n    }\n  }\n  globalConfiguration {\n    site {\n      logoMode\n    }\n    ...InstallationNameFragment\n    id\n  }\n  ...CommunityPickerFragment\n}\n\nfragment CommunityPickerFragment on Query {\n  pickerCommunities: communities(order: POSITION_ASCENDING) {\n    edges {\n      node {\n        slug\n        title\n        id\n      }\n    }\n  }\n}\n\nfragment ContributorNameFragment on AnyContributor {\n  __isAnyContributor: __typename\n  ... on PersonContributor {\n    __typename\n    familyName\n    givenName\n  }\n  ... on OrganizationContributor {\n    __typename\n    legalName\n  }\n}\n\nfragment ContributorsListFragment on AnyEntity {\n  __isAnyEntity: __typename\n  ... on Item {\n    attributions {\n      slug\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n  ... on Collection {\n    attributions {\n      slug\n      roles {\n        label\n        id\n      }\n      contributor {\n        __typename\n        ...ContributorNameFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CoverImageFragment on ImageAttachment {\n  image: large {\n    webp {\n      url\n      alt\n      width\n      height\n    }\n  }\n}\n\nfragment EntitySummaryFragment on Entity {\n  __isEntity: __typename\n  __typename\n  layouts {\n    listItem {\n      template {\n        ...sharedListItemTemplateFragment\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment ImageFragment on Image {\n  __isImage: __typename\n  alt\n  url\n  width\n  height\n}\n\nfragment InstallationNameFragment on GlobalConfiguration {\n  site {\n    installationName\n    logoMode\n  }\n  logo {\n    storage\n    original {\n      originalFilename\n      ...ImageFragment\n    }\n    sansText {\n      size\n      webp {\n        width\n        height\n        ...ImageFragment\n      }\n    }\n  }\n}\n\nfragment PaginationFragment on PageInfo {\n  page\n  pageCount\n}\n\nfragment SearchFilterBooleanFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterDateFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  ... on ScalarProperty {\n    __isScalarProperty: __typename\n    type\n  }\n  ...SearchFilterInputFragment\n  ...SearchFilterSelectFragment\n  ...SearchFilterDateFragment\n  ...SearchFilterNumberFragment\n  ...SearchFilterBooleanFragment\n}\n\nfragment SearchFilterInputFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterNumberFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n}\n\nfragment SearchFilterSelectFragment on SearchableProperty {\n  __isSearchableProperty: __typename\n  label\n  description\n  searchPath\n  searchOperators\n  ... on SelectProperty {\n    options {\n      label\n      value\n    }\n  }\n}\n\nfragment SearchFiltersFragment on SearchScope {\n  coreProperties {\n    ... on SearchableProperty {\n      __isSearchableProperty: __typename\n      searchPath\n    }\n    ...SearchFilterFragment\n  }\n  ...SearchSchemaFilterFragment\n  schemas: availableSchemaVersions {\n    searchableProperties {\n      __typename\n      ... on SearchableProperty {\n        __isSearchableProperty: __typename\n        searchPath\n        label\n      }\n      ...SearchFilterFragment\n    }\n    id\n  }\n}\n\nfragment SearchLayoutFragment_dJrY9 on Query {\n  search {\n    results(query: $query, page: $page, perPage: 20, predicates: $predicates, order: $order, schema: $schema) {\n      ...SearchResultsFragment\n    }\n    ...SearchFiltersFragment\n  }\n}\n\nfragment SearchResultsFragment on SearchResultConnection {\n  nodes {\n    entity {\n      __typename\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n      ...EntitySummaryFragment\n    }\n    id\n  }\n  pageInfo {\n    totalCount\n    ...PaginationFragment\n  }\n}\n\nfragment SearchSchemaFilterFragment on SearchScope {\n  schemas: availableSchemaVersions {\n    name\n    schemaDefinition {\n      slug\n      id\n    }\n    id\n  }\n}\n\nfragment sharedBlockSlotFragment on TemplateSlotBlockInstance {\n  content\n  kind\n  valid\n}\n\nfragment sharedInlineSlotFragment on TemplateSlotInlineInstance {\n  content\n  kind\n  valid\n  hidesTemplate\n}\n\nfragment sharedListItemTemplateFragment on ListItemTemplateInstance {\n  entity {\n    __typename\n    ... on Collection {\n      __typename\n      id\n      slug\n      title\n      thumbnail {\n        image: large {\n          webp {\n            url\n          }\n        }\n        ...CoverImageFragment\n      }\n      contributors {\n        pageInfo {\n          totalCount\n        }\n      }\n      ...ContributorsListFragment\n      heroImage {\n        image: large {\n          webp {\n            alt\n            url\n          }\n        }\n      }\n    }\n    ... on Item {\n      __typename\n      id\n      slug\n      title\n      thumbnail {\n        image: large {\n          webp {\n            url\n          }\n        }\n        ...CoverImageFragment\n      }\n      contributors {\n        pageInfo {\n          totalCount\n        }\n      }\n      ...ContributorsListFragment\n      heroImage {\n        image: large {\n          webp {\n            alt\n            url\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  slots {\n    contextFull {\n      ...sharedInlineSlotFragment\n    }\n    contextAbbr {\n      ...sharedInlineSlotFragment\n    }\n    contextC {\n      ...sharedInlineSlotFragment\n    }\n    description {\n      ...sharedBlockSlotFragment\n    }\n    header {\n      ...sharedInlineSlotFragment\n    }\n    metaA {\n      ...sharedInlineSlotFragment\n    }\n    metaB {\n      ...sharedInlineSlotFragment\n    }\n    subheader {\n      ...sharedInlineSlotFragment\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f24173ad515b2657c0fa68dab4fbcf7b";

export default node;
