/**
 * @generated SignedSource<<99f0ac6966f5be799f0c1b2ccc9d44d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type HeroBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HeroTemplateFragment$data = {
  readonly entity: {
    readonly __typename: "Community";
    readonly " $fragmentSpreads": FragmentRefs<"BreadcrumbsBarFragment">;
  };
  readonly template: {
    readonly definition: {
      readonly background: HeroBackground | null | undefined;
      readonly descendantSearchPrompt: string | null | undefined;
      readonly showBigSearchPrompt: boolean | null | undefined;
      readonly showBreadcrumbs: boolean | null | undefined;
      readonly showSharingLink: boolean | null | undefined;
      readonly showSplitDisplay: boolean | null | undefined;
    };
    readonly slots: {
      readonly bigSearchPrompt: {
        readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
      } | null | undefined;
    };
    readonly " $fragmentSpreads": FragmentRefs<"DetailHeroFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"CommunityHeroHeaderFragment" | "EntityHeroHeaderFragment">;
  readonly " $fragmentType": "HeroTemplateFragment";
};
export type HeroTemplateFragment$key = {
  readonly " $data"?: HeroTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeroTemplateFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeroTemplateFragment",
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
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            }
          ],
          "type": "Community",
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
              "name": "descendantSearchPrompt",
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "showBigSearchPrompt",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HeroTemplateInstanceSlots",
          "kind": "LinkedField",
          "name": "slots",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TemplateSlotInlineInstance",
              "kind": "LinkedField",
              "name": "bigSearchPrompt",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "sharedInlineSlotFragment"
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
          "name": "DetailHeroFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommunityHeroHeaderFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EntityHeroHeaderFragment"
    }
  ],
  "type": "HeroLayoutInstance",
  "abstractKey": null
};

(node as any).hash = "e250dbb54118c0ccd6aa40f4fc4b3320";

export default node;
