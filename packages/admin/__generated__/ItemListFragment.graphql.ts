/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ItemListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly slug: string;
        readonly title: string;
        readonly schemaVersion: {
            readonly name: string;
            readonly number: string;
        };
        readonly items: {
            readonly pageInfo: {
                readonly totalCount: number;
            };
        };
        readonly allowedActions: ReadonlyArray<string>;
        readonly " $fragmentRefs": FragmentRefs<"ContributorsColumnFragment" | "EntityThumbnailColumnFragment" | "PublishedDateColumnFragment">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "ItemListFragment";
};
export type ItemListFragment$data = ItemListFragment;
export type ItemListFragment$key = {
    readonly " $data"?: ItemListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ItemListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
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
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "SchemaVersion",
          "kind": "LinkedField",
          "name": "schemaVersion",
          "plural": false,
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
              "kind": "ScalarField",
              "name": "number",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemConnection",
          "kind": "LinkedField",
          "name": "items",
          "plural": false,
          "selections": [
            (v3/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "allowedActions",
          "storageKey": null
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "ContributorsColumnFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": [
                        {
                          "kind": "Literal",
                          "name": "page",
                          "value": 1
                        },
                        {
                          "kind": "Literal",
                          "name": "perPage",
                          "value": 1
                        }
                      ],
                      "concreteType": "ItemContributionConnection",
                      "kind": "LinkedField",
                      "name": "contributions",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "ItemContributionEdge",
                          "kind": "LinkedField",
                          "name": "edges",
                          "plural": true,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "ItemContribution",
                              "kind": "LinkedField",
                              "name": "node",
                              "plural": false,
                              "selections": [
                                {
                                  "alias": null,
                                  "args": null,
                                  "concreteType": null,
                                  "kind": "LinkedField",
                                  "name": "contributor",
                                  "plural": false,
                                  "selections": [
                                    (v4/*: any*/),
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
                        (v3/*: any*/)
                      ],
                      "storageKey": "contributions(page:1,perPage:1)"
                    }
                  ],
                  "type": "Item",
                  "abstractKey": null
                }
              ],
              "type": "AnyEntity",
              "abstractKey": "__isAnyEntity"
            }
          ]
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "EntityThumbnailColumnFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                (v4/*: any*/),
                (v2/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ImageAttachment",
                  "kind": "LinkedField",
                  "name": "thumbnail",
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
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CoverImageFragment"
                    }
                  ],
                  "storageKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v0/*: any*/)
                  ],
                  "type": "Node",
                  "abstractKey": "__isNode"
                },
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v1/*: any*/)
                  ],
                  "type": "Sluggable",
                  "abstractKey": "__isSluggable"
                }
              ],
              "type": "Entity",
              "abstractKey": "__isEntity"
            }
          ]
        },
        {
          "kind": "InlineDataFragmentSpread",
          "name": "PublishedDateColumnFragment",
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "VariablePrecisionDate",
                  "kind": "LinkedField",
                  "name": "published",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "PrecisionDateFragment"
                    }
                  ],
                  "storageKey": null
                }
              ],
              "type": "ReferencesGlobalEntityDates",
              "abstractKey": "__isReferencesGlobalEntityDates"
            }
          ]
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "ItemConnection",
  "abstractKey": null
};
})();
(node as any).hash = 'b571bf4f4d379ca09362443c55c47fce';
export default node;
