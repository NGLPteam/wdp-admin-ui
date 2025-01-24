/**
 * @generated SignedSource<<cc7757fbd01f1c379b06e13a6616f3c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributorsListFragment$data = {
  readonly nodes?: ReadonlyArray<{
    readonly contributionRole: {
      readonly label: string;
    };
    readonly contributor: {
      readonly slug?: string;
      readonly " $fragmentSpreads": FragmentRefs<"ContributorNameFragment">;
    };
    readonly roleLabel: string | null | undefined;
  }>;
  readonly " $fragmentType": "ContributorsListFragment";
};
export type ContributorsListFragment$key = {
  readonly " $data"?: ContributorsListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "roleLabel",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ControlledVocabularyItem",
    "kind": "LinkedField",
    "name": "contributionRole",
    "plural": false,
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
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          }
        ],
        "type": "Sluggable",
        "abstractKey": "__isSluggable"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ContributorNameFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorsListFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemContribution",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ItemContributionConnection",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CollectionContribution",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "CollectionContributionConnection",
      "abstractKey": null
    }
  ],
  "type": "Paginated",
  "abstractKey": "__isPaginated"
};
})();

(node as any).hash = "46774f0bd08c6ae869cbdd128a97d420";

export default node;
