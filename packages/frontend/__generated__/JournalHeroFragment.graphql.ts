/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type JournalHeroFragment = {
    readonly title: string;
    readonly thumbnail: {
        readonly " $fragmentRefs": FragmentRefs<"HeroImageFragment">;
    } | null;
    readonly " $refType": "JournalHeroFragment";
};
export type JournalHeroFragment$data = JournalHeroFragment;
export type JournalHeroFragment$key = {
    readonly " $data"?: JournalHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"JournalHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JournalHeroFragment",
  "selections": [
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
      "concreteType": "AssetPreview",
      "kind": "LinkedField",
      "name": "thumbnail",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeroImageFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = '2b8190e14056b987acf74739101c275e';
export default node;
