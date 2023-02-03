/**
 * @generated SignedSource<<48c628fd4cd887e487578d6dca193ef7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AssetKind = "audio" | "document" | "image" | "pdf" | "unknown" | "video" | "%future added value";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type AssetDetailBlockFragment$data = {
  readonly altText?: string | null;
  readonly caption?: string | null;
  readonly downloadUrl?: string | null;
  readonly fileSize?: number;
  readonly kind?: AssetKind;
  readonly name?: string;
  readonly preview?: {
    readonly storage: AttachmentStorage | null;
    readonly " $fragmentSpreads": FragmentRefs<"ContentImageFragment">;
  };
  readonly slug?: String;
  readonly updatedAt?: String;
  readonly " $fragmentSpreads": FragmentRefs<"AssetPDFPreviewFragment">;
  readonly " $fragmentType": "AssetDetailBlockFragment";
};
export type AssetDetailBlockFragment$key = {
  readonly " $data"?: AssetDetailBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssetDetailBlockFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetDetailBlockFragment",
  "selections": [
    {
      "kind": "InlineFragment",
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
          "name": "caption",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "kind",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "downloadUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fileSize",
          "storageKey": null
        },
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
          "name": "altText",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "preview",
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
              "name": "ContentImageFragment"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetPDFPreviewFragment"
        }
      ],
      "type": "Asset",
      "abstractKey": "__isAsset"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        }
      ],
      "type": "AssetImage",
      "abstractKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};

(node as any).hash = "e719c5acd5823d2a8061a8f6236eadb6";

export default node;
