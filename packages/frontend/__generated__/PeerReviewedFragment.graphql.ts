/**
 * @generated SignedSource<<32af54d7fb71f81f5b46254b2153c79a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PeerReviewedFragment$data = {
  readonly peerReviewed: {
    readonly checked?: boolean | null;
    readonly checkedByDefault?: boolean | null;
  } | null;
  readonly " $fragmentType": "PeerReviewedFragment";
};
export type PeerReviewedFragment$key = {
  readonly " $data"?: PeerReviewedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PeerReviewedFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PeerReviewedFragment",
  "selections": [
    {
      "alias": "peerReviewed",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "peer_reviewed"
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
              "name": "checked",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "checkedByDefault",
              "storageKey": null
            }
          ],
          "type": "BooleanProperty",
          "abstractKey": null
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"peer_reviewed\")"
    }
  ],
  "type": "SchemaInstance",
  "abstractKey": "__isSchemaInstance"
};

(node as any).hash = "c0a447a7e50caebb2f86f4b55973f1e5";

export default node;
