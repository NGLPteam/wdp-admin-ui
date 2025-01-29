/**
 * @generated SignedSource<<c53adbd10813a38c1114577cc6da42bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorFragment$data = {
  readonly contributor: {
    readonly affiliation: string | null | undefined;
    readonly image: {
      readonly " $fragmentSpreads": FragmentRefs<"ContributorAvatarFragment">;
    };
    readonly orcid: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
  };
  readonly roles: ReadonlyArray<{
    readonly identifier: string;
    readonly label: string;
  }>;
  readonly " $fragmentType": "ContributorFragment";
};
export type ContributorFragment$key = {
  readonly " $data"?: ContributorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorFragment",
  "selections": [
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
          "name": "identifier",
          "storageKey": null
        },
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
          "kind": "ScalarField",
          "name": "affiliation",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "orcid",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "ImageAttachment",
          "kind": "LinkedField",
          "name": "image",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ContributorAvatarFragment"
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorNameFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Attribution",
  "abstractKey": "__isAttribution"
};

(node as any).hash = "92d85f6dbba09060aa8ba913f5aea6b2";

export default node;
