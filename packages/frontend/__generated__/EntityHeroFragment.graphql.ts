/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type EntityHeroFragment = {
    readonly title?: string | undefined;
    readonly subtitle?: string | null | undefined;
    readonly thumbnail?: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"ContentImageFragment">;
    } | undefined;
    readonly heroImage?: {
        readonly storage: AttachmentStorage | null;
        readonly " $fragmentRefs": FragmentRefs<"HeroImageFragment">;
    } | undefined;
    readonly heroImageMetadata?: {
        readonly " $fragmentRefs": FragmentRefs<"HeroImageMetadataFragment">;
    } | null | undefined;
    readonly about?: {
        readonly content?: string | null | undefined;
    } | null | undefined;
    readonly published?: {
        readonly value: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    } | undefined;
    readonly " $refType": "EntityHeroFragment";
};
export type EntityHeroFragment$data = EntityHeroFragment;
export type EntityHeroFragment$key = {
    readonly " $data"?: EntityHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EntityHeroFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "storage",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "ImageMetadata",
  "kind": "LinkedField",
  "name": "heroImageMetadata",
  "plural": false,
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "HeroImageMetadataFragment"
    }
  ],
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "VariablePrecisionDate",
  "kind": "LinkedField",
  "name": "published",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PrecisionDateFragment"
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHeroFragment",
  "selections": [
    {
      "kind": "InlineFragment",
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
          "kind": "ScalarField",
          "name": "subtitle",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "thumbnail",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ContentImageFragment"
            }
          ],
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
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "HeroImageFragment"
            }
          ],
          "storageKey": null
        },
        (v1/*: any*/)
      ],
      "type": "Entity",
      "abstractKey": "__isEntity"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "about",
          "args": [
            {
              "kind": "Literal",
              "name": "fullPath",
              "value": "about"
            }
          ],
          "concreteType": null,
          "kind": "LinkedField",
          "name": "schemaProperty",
          "plural": false,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "content",
                  "storageKey": null
                }
              ],
              "type": "MarkdownProperty",
              "abstractKey": null
            }
          ],
          "storageKey": "schemaProperty(fullPath:\"about\")"
        },
        (v2/*: any*/)
      ],
      "type": "Collection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "type": "Item",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '34d3ea10c8e48aba6188395294e86e6d';
export default node;
