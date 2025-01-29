/**
 * @generated SignedSource<<d8de90b1cf2eff8c54c36bda7c90d4c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ContributorListBackground = "DARK" | "LIGHT" | "NONE" | "%future added value";
export type TemplateWidth = "FULL" | "HALF" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ContributorsTemplateFragment$data = {
  readonly __typename: "ContributorListTemplateInstance";
  readonly contributorsDefinition: {
    readonly background: ContributorListBackground | null | undefined;
    readonly limit: number | null | undefined;
    readonly width: TemplateWidth | null | undefined;
  };
  readonly entity: {
    readonly __typename: "Collection";
    readonly attributions: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ContributorFragment">;
    }>;
    readonly slug: string;
  } | {
    readonly __typename: "Item";
    readonly attributions: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ContributorFragment">;
    }>;
    readonly slug: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly slots: {
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "ContributorsTemplateFragment";
};
export type ContributorsTemplateFragment$key = {
  readonly " $data"?: ContributorsTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributorsTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v2 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ContributorFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributorsTemplateFragment",
  "selections": [
    (v0/*: any*/),
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
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "ItemAttribution",
              "kind": "LinkedField",
              "name": "attributions",
              "plural": true,
              "selections": (v2/*: any*/),
              "storageKey": null
            }
          ],
          "type": "Item",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "CollectionAttribution",
              "kind": "LinkedField",
              "name": "attributions",
              "plural": true,
              "selections": (v2/*: any*/),
              "storageKey": null
            }
          ],
          "type": "Collection",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "contributorsDefinition",
      "args": null,
      "concreteType": "ContributorListTemplateDefinition",
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
          "name": "limit",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "width",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ContributorListTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "header",
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
    }
  ],
  "type": "ContributorListTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "75346956a6d9f1fcfbc92e6f25440aa4";

export default node;
