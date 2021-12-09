/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type CurrentIssueFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly title: string;
            readonly slug: string;
            readonly thumbnail: {
                readonly storage: AttachmentStorage | null;
                readonly " $fragmentRefs": FragmentRefs<"CoverImageFragment">;
            };
            readonly published: {
                readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
            };
            readonly ancestorOfType: {
                readonly title?: string | undefined;
            } | null;
            readonly items: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly title: string;
                        readonly slug: string;
                        readonly summary: string | null;
                        readonly contributions: {
                            readonly " $fragmentRefs": FragmentRefs<"ContributorsListFragment">;
                        };
                    };
                }>;
            };
        };
    }>;
    readonly " $refType": "CurrentIssueFragment";
};
export type CurrentIssueFragment$data = CurrentIssueFragment;
export type CurrentIssueFragment$key = {
    readonly " $data"?: CurrentIssueFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CurrentIssueFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CurrentIssueFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
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
            },
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "schema",
                  "value": "nglp:journal"
                }
              ],
              "concreteType": null,
              "kind": "LinkedField",
              "name": "ancestorOfType",
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v0/*: any*/)
                  ],
                  "type": "Collection",
                  "abstractKey": null
                }
              ],
              "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
            },
            {
              "alias": null,
              "args": [
                {
                  "kind": "Literal",
                  "name": "perPage",
                  "value": 3
                }
              ],
              "concreteType": "ItemConnection",
              "kind": "LinkedField",
              "name": "items",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "ItemEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Item",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        (v0/*: any*/),
                        (v1/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "summary",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "ItemContributionConnection",
                          "kind": "LinkedField",
                          "name": "contributions",
                          "plural": false,
                          "selections": [
                            {
                              "args": null,
                              "kind": "FragmentSpread",
                              "name": "ContributorsListFragment"
                            }
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": "items(perPage:3)"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CollectionConnection",
  "abstractKey": null
};
})();
(node as any).hash = '256d00fd63a68a81b4da129d19ec80f6';
export default node;
