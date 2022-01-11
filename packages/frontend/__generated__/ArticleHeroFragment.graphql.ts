/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ArticleHeroFragment = {
    readonly slug: string;
    readonly title: string;
    readonly subtitle: string | null;
    readonly summary: string | null;
    readonly published: {
        readonly " $fragmentRefs": FragmentRefs<"PrecisionDateFragment">;
    };
    readonly contributions: {
        readonly " $fragmentRefs": FragmentRefs<"ContributorsListFragment">;
    };
    readonly pdfVersion: {
        readonly " $fragmentRefs": FragmentRefs<"AssetDownloadButtonFragment">;
    } | null;
    readonly journal: {
        readonly " $fragmentRefs": FragmentRefs<"PeerReviewedFragment" | "PreprintVersionFragment" | "OpenAccessFragment" | "CCLicenseFragment">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"DOIFragment">;
    readonly " $refType": "ArticleHeroFragment";
};
export type ArticleHeroFragment$data = ArticleHeroFragment;
export type ArticleHeroFragment$key = {
    readonly " $data"?: ArticleHeroFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ArticleHeroFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticleHeroFragment",
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
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "VariablePrecisionDate",
      "kind": "LinkedField",
      "name": "published",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PrecisionDateFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemContributionConnection",
      "kind": "LinkedField",
      "name": "contributions",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ContributorsListFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": "pdfVersion",
      "args": [
        {
          "kind": "Literal",
          "name": "fullPath",
          "value": "pdf_version"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "schemaProperty",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AssetDownloadButtonFragment"
        }
      ],
      "storageKey": "schemaProperty(fullPath:\"pdf_version\")"
    },
    {
      "alias": "journal",
      "args": [
        {
          "kind": "Literal",
          "name": "schema",
          "value": "nglp:journal"
        }
      ],
      "concreteType": null,
      "kind": "LinkedField",
      "name": "ancestorOfType",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PeerReviewedFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PreprintVersionFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "OpenAccessFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CCLicenseFragment"
        }
      ],
      "storageKey": "ancestorOfType(schema:\"nglp:journal\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DOIFragment"
    }
  ],
  "type": "Item",
  "abstractKey": null
};
(node as any).hash = '99eb8a1001e78b9f6588e654921ffc9e';
export default node;
