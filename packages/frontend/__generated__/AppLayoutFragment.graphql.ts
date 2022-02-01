/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AppLayoutFragment = {
    readonly " $fragmentRefs": FragmentRefs<"AppBodyFragment" | "CommunityPickerFragment">;
    readonly " $refType": "AppLayoutFragment";
};
export type AppLayoutFragment$data = AppLayoutFragment;
export type AppLayoutFragment$key = {
    readonly " $data"?: AppLayoutFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AppLayoutFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppLayoutFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBodyFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityPickerFragment"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '2cddc3a534c71c3e8b68d3798391a01a';
export default node;
