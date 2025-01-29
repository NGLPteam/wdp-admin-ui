/**
 * @generated SignedSource<<0c9b4eda07aa4c319e9cdfbe97f3c7d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ContributionsBlockFragment$data = {
  readonly attributions: ReadonlyArray<{
    readonly contributor: {
      readonly image: {
        readonly storage: AttachmentStorage | null | undefined;
      };
    };
    readonly roles: ReadonlyArray<{
      readonly label: string;
    }>;
    readonly slug: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorFragment">;
  }>;
  readonly " $fragmentType": "ContributionsBlockFragment";
};
export type ContributionsBlockFragment$key = {
  readonly " $data"?: ContributionsBlockFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionsBlockFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionsBlockFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemAttribution",
      "kind": "LinkedField",
      "name": "attributions",
      "plural": true,
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
          "concreteType": "ControlledVocabularyItem",
          "kind": "LinkedField",
          "name": "roles",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "label",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "contributor",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ImageAttachment",
              "kind": "LinkedField",
              "name": "image",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "storage",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Item",
  "abstractKey": null
};

(node as any).hash = "c060b926622fcd6180891525b4ac0ee5";

export default node;
