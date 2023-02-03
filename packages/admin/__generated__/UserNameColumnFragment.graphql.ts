/**
 * @generated SignedSource<<b1eb249e2decd20f88ca2c6340132cc8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserNameColumnFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"UserNameColumnCellFragment">;
  readonly " $fragmentType": "UserNameColumnFragment";
};
export type UserNameColumnFragment$key = {
  readonly " $data"?: UserNameColumnFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserNameColumnFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserNameColumnFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserNameColumnCellFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "b5e14fb1ccc97ea1a2a2a732e742c94a";

export default node;
