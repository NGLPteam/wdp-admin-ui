/**
 * @generated SignedSource<<470704d0af7cdab1957e980bd44d5328>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributionSummaryFragment$data = {
  readonly contributionRole?: {
    readonly label: string;
  };
  readonly entity?: {
    readonly " $fragmentSpreads": FragmentRefs<"ContributionSummaryEntityFragment">;
  };
  readonly role?: string | null | undefined;
  readonly roleLabel?: string | null | undefined;
  readonly " $fragmentType": "ContributionSummaryFragment";
};
export type ContributionSummaryFragment$key = {
  readonly " $data"?: ContributionSummaryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionSummaryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ContributionSummaryEntityFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionSummaryFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "role",
          "storageKey": null
        },
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
        }
      ],
      "type": "Contribution",
      "abstractKey": "__isContribution"
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "entity",
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "CollectionContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": "entity",
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContribution",
  "abstractKey": "__isAnyContribution"
};
})();

(node as any).hash = "70c62d423777f95202a44aa064f7f89e";

export default node;
