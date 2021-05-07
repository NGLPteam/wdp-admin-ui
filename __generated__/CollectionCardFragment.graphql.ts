/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CollectionCardFragment = {
    readonly slug: unknown;
    readonly title: string;
    readonly description: string;
    readonly " $refType": "CollectionCardFragment";
};
export type CollectionCardFragment$data = CollectionCardFragment;
export type CollectionCardFragment$key = {
    readonly " $data"?: CollectionCardFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"CollectionCardFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
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
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'caae86542a4c2d9fbe3227792c9ce02f';
export default node;
