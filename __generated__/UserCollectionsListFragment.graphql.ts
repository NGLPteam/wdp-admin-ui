/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserCollectionsListFragment = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly collection: {
                readonly id: string;
                readonly title: string;
                readonly slug: string;
                readonly thumbnail: {
                    readonly image: {
                        readonly png: {
                            readonly url: string;
                            readonly height: number;
                            readonly width: number;
                            readonly alt: string;
                        } | null;
                    };
                } | null;
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
    readonly " $refType": "UserCollectionsListFragment";
};
export type UserCollectionsListFragment$data = UserCollectionsListFragment;
export type UserCollectionsListFragment$key = {
    readonly " $data"?: UserCollectionsListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"UserCollectionsListFragment">;
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserCollectionsListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserCollectionAccessGrantEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserCollectionAccessGrant",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Collection",
              "kind": "LinkedField",
              "name": "collection",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "AssetPreview",
                  "kind": "LinkedField",
                  "name": "thumbnail",
                  "plural": false,
                  "selections": [
                    {
                      "alias": "image",
                      "args": null,
                      "concreteType": "PreviewImageMap",
                      "kind": "LinkedField",
                      "name": "medium",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "PreviewImage",
                          "kind": "LinkedField",
                          "name": "png",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "url",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "height",
                              "storageKey": null
                            },
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
                              "name": "alt",
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
                (v1/*: any*/)
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
  "type": "UserCollectionAccessGrantConnection",
  "abstractKey": null
};
})();
(node as any).hash = 'ae59e2182614967cf5677e80fe920cea';
export default node;
