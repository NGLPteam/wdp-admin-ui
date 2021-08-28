/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ContributorPersonFormFragment = {
    readonly givenName: string | null;
    readonly familyName: string | null;
    readonly title: string | null;
    readonly email: string | null;
    readonly affiliation: string | null;
    readonly bio: string | null;
    readonly " $refType": "ContributorPersonFormFragment";
};
export type ContributorPersonFormFragment$data = ContributorPersonFormFragment;
export type ContributorPersonFormFragment$key = {
    readonly " $data"?: ContributorPersonFormFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"ContributorPersonFormFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorPersonFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "givenName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "familyName",
      "storageKey": null
    },
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
      "name": "email",
      "storageKey": null
    },
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
      "name": "bio",
      "storageKey": null
    }
  ],
  "type": "PersonContributor",
  "abstractKey": null
};
(node as any).hash = '74ab45bcfc312b2f18088ceeec0f1e13';
export default node;
