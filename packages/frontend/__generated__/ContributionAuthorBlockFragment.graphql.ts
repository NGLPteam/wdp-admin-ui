/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AttachmentStorage = "CACHE" | "DERIVATIVES" | "REMOTE" | "STORE" | "%future added value";
export type ContributionAuthorBlockFragment = {
    readonly affiliation: string | null;
    readonly role: string | null;
    readonly contributor: {
        readonly slug?: string | undefined;
        readonly __typename: "PersonContributor";
        readonly title?: string | null | undefined;
        readonly bio?: string | null | undefined;
        readonly affiliation?: string | null | undefined;
        readonly image?: {
            readonly storage: AttachmentStorage | null;
            readonly " $fragmentRefs": FragmentRefs<"ContributorAvatarFragment">;
        } | undefined;
        readonly " $fragmentRefs": FragmentRefs<"ContributorNameFragment">;
    };
    readonly collection?: {
        readonly slug: string;
    } | undefined;
    readonly item?: {
        readonly slug: string;
    } | undefined;
    readonly " $refType": "ContributionAuthorBlockFragment";
};
export type ContributionAuthorBlockFragment$data = ContributionAuthorBlockFragment;
export type ContributionAuthorBlockFragment$key = {
    readonly " $data"?: ContributionAuthorBlockFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContributionAuthorBlockFragment">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "affiliation",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "slug",
    "storageKey": null
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v4 = {
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContributorAvatarFragment"
    }
  ],
  "storageKey": null
},
v5 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributorNameFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionAuthorBlockFragment",
  "selections": [
    (v0/*: any*/),
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "contributor",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Sluggable",
          "abstractKey": "__isSluggable"
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            (v3/*: any*/),
            (v0/*: any*/),
            (v4/*: any*/),
            (v5/*: any*/)
          ],
          "type": "PersonContributor",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v2/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/),
            (v5/*: any*/)
          ],
          "type": "OrganizationContributor",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": (v1/*: any*/),
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
          "alias": null,
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "Contribution",
  "abstractKey": "__isContribution"
};
})();
(node as any).hash = 'f3b6a68100a97ffee12ba1a3eea97375';
export default node;
