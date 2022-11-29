/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserItemsListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly item: {
                readonly id: string;
                readonly title: string;
                readonly slug: string;
                readonly " $fragmentRefs": FragmentRefs<"EntityThumbnailColumnFragment">;
            };
            readonly role: {
                readonly id: string;
                readonly name: string;
            };
            readonly user: {
                readonly id: string;
                readonly slug: string;
            };
        };
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "UserItemsListFragment";
};
export type UserItemsListFragment$data = UserItemsListFragment;
export type UserItemsListFragment$key = {
    readonly " $data"?: UserItemsListFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserItemsListFragment">;
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
  "name": "title",
  "storageKey": null
},
v2 = {
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
  "name": "UserItemsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserItemAccessGrantEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserItemAccessGrant",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Item",
              "kind": "LinkedField",
              "name": "item",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                {
                  "kind": "InlineDataFragmentSpread",
                  "name": "EntityThumbnailColumnFragment",
                  "selections": [
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "__typename",
                          "storageKey": null
                        },
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
                            (v2/*: any*/)
                          ],
                          "type": "Sluggable",
                          "abstractKey": "__isSluggable"
                        }
                      ],
                      "type": "Entity",
                      "abstractKey": "__isEntity"
                    }
                  ]
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Role",
              "kind": "LinkedField",
              "name": "role",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
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
                (v0/*: any*/),
                (v2/*: any*/)
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ModelListPageFragment"
    }
  ],
  "type": "UserItemAccessGrantConnection",
  "abstractKey": null
};
})();
(node as any).hash = 'f03655713795636347f19fa1851f432d';
export default node;
