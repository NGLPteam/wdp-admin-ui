/**
 * @generated SignedSource<<800878d4c482c7abae5cb1a102a570fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributionUpdateFormFieldsFragment$data = {
  readonly position?: number | null | undefined;
  readonly " $fragmentType": "ContributionUpdateFormFieldsFragment";
};
export type ContributionUpdateFormFieldsFragment$key = {
  readonly " $data"?: ContributionUpdateFormFieldsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "position",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionUpdateFormFieldsFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "CollectionContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContribution",
  "abstractKey": "__isAnyContribution"
};
})();

(node as any).hash = "d818da465d5c92516f8cd67b507f8ad6";

export default node;
