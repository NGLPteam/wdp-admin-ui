/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CollectionTypeaheadFragment = {
    readonly viewer: {
        readonly collections: {
            readonly nodes: ReadonlyArray<{
                readonly id: string;
                readonly title: string;
                readonly slug: string;
            }>;
        };
    };
    readonly " $refType": "CollectionTypeaheadFragment";
};
export type CollectionTypeaheadFragment$data = CollectionTypeaheadFragment;
export type CollectionTypeaheadFragment$key = {
    readonly " $data"?: CollectionTypeaheadFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CollectionTypeaheadFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionTypeaheadFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionConnection",
          "kind": "LinkedField",
          "name": "collections",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Collection",
              "kind": "LinkedField",
              "name": "nodes",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
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
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '35c6041846040813d4f309fa3ba4fd64';
export default node;
