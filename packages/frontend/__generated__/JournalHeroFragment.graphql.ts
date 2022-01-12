/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type JournalHeroFragment = {
    readonly slug: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly heroImage: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"HeroImageFragment">;
    };
    readonly " $fragmentRefs": FragmentRefs<"DOIFragment" | "JournalHeroMetadataFragment">;
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
      "name": "subtitle",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "storage",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeroImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DOIFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JournalHeroMetadataFragment"
    }
  ],
  "type": "Collection",
  "abstractKey": null
};
(node as any).hash = 'bc23fa1169fa2eddfe26b3deed18b111';
export default node;
