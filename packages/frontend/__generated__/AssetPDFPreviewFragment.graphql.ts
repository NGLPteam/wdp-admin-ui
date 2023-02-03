/**
 * @generated SignedSource<<e2168c6818205c7bb107a2d742a48b32>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AssetPDFPreviewFragment$data = {
  readonly downloadUrl?: string | null;
  readonly " $fragmentType": "AssetPDFPreviewFragment";
};
export type AssetPDFPreviewFragment$key = {
  readonly " $data"?: AssetPDFPreviewFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AssetPDFPreviewFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AssetPDFPreviewFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "downloadUrl",
          "storageKey": null
        }
      ],
      "type": "AssetPDF",
      "abstractKey": null
    }
  ],
  "type": "Asset",
  "abstractKey": "__isAsset"
};

(node as any).hash = "18863ef29e020d7be73bb76ddcf95b8a";

export default node;
