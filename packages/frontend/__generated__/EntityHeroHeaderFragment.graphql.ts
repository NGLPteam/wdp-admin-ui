/**
 * @generated SignedSource<<008a077152fe3bd2aa3f09a10517654d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type EntityHeroHeaderFragment$data = {
  readonly entity: {
    readonly __typename: "Collection";
    readonly heroImage?: {
      readonly " $fragmentSpreads": FragmentRefs<"ImageHeroTemplateFragment">;
    };
    readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment">;
  };
  readonly template: {
    readonly definition: {
      readonly background: HeroBackground | null | undefined;
      readonly showBreadcrumbs: boolean | null | undefined;
      readonly showHeroImage: boolean | null | undefined;
      readonly showSharingLink: boolean | null | undefined;
      readonly showSplitDisplay: boolean | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"DetailHeroFragment" | "HeaderHeroFragment">;
  } | null | undefined;
  readonly " $fragmentType": "EntityHeroHeaderFragment";
};
export type EntityHeroHeaderFragment$key = {
  readonly " $data"?: EntityHeroHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityHeroHeaderFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "heroImage",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ImageHeroTemplateFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityHeroHeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "entity",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v0/*: any*/),
          "type": "Item",
          "abstractKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BreadcrumbsBarFragment"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "HeroTemplateInstance",
      "kind": "LinkedField",
      "name": "template",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "HeroTemplateDefinition",
          "kind": "LinkedField",
          "name": "definition",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "background",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showHeroImage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showBreadcrumbs",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showSharingLink",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showSplitDisplay",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HeaderHeroFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DetailHeroFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HeroLayoutInstance",
  "abstractKey": null
};
})();

(node as any).hash = "e8b02e2953034d882308402728155d15";

export default node;
