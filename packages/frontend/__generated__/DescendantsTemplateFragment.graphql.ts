/**
 * @generated SignedSource<<94231b15c2be57d6a89abc637fc8f359>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type DescendantListVariant = "CARDS" | "COMPACT" | "GRID" | "PROMOS" | "SUMMARY" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type DescendantsTemplateFragment$data = {
  readonly descendantsDefinition?: {
    readonly variant: DescendantListVariant | null | undefined;
  };
  readonly entity?: {
    readonly __typename: string;
    readonly slug?: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"sharedListTemplateFragment">;
  readonly " $fragmentType": "DescendantsTemplateFragment";
};
export type DescendantsTemplateFragment$key = {
  readonly " $data"?: DescendantsTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DescendantsTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "variant",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "background",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seeAllButtonLabel",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showSeeAllButton",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionMode",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "selectionLimit",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showEntityContext",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v8 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
],
v9 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "header",
    "plural": false,
    "selections": (v8/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "headerAside",
    "plural": false,
    "selections": (v8/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "metadata",
    "plural": false,
    "selections": (v8/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "TemplateSlotInlineInstance",
    "kind": "LinkedField",
    "name": "subtitle",
    "plural": false,
    "selections": (v8/*: any*/),
    "storageKey": null
  }
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "TemplateEntityList",
  "kind": "LinkedField",
  "name": "entityList",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "empty",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "sharedListItemsTemplateFragment"
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DescendantsTemplateFragment",
  "selections": [
    {
      "kind": "InlineFragment",
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            },
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
            }
          ],
          "storageKey": null
        },
        {
          "alias": "descendantsDefinition",
          "args": null,
          "concreteType": "DescendantListTemplateDefinition",
          "kind": "LinkedField",
          "name": "definition",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "DescendantListTemplateInstance",
      "abstractKey": null
    },
    {
      "kind": "InlineDataFragmentSpread",
      "name": "sharedListTemplateFragment",
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": "linksDefinition",
              "args": null,
              "concreteType": "LinkListTemplateDefinition",
              "kind": "LinkedField",
              "name": "definition",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                (v2/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/),
                (v5/*: any*/),
                (v6/*: any*/),
                (v7/*: any*/),
                (v0/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "LinkListTemplateInstanceSlots",
              "kind": "LinkedField",
              "name": "slots",
              "plural": false,
              "selections": (v9/*: any*/),
              "storageKey": null
            },
            (v10/*: any*/)
          ],
          "type": "LinkListTemplateInstance",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": "descendantsDefinition",
              "args": null,
              "concreteType": "DescendantListTemplateDefinition",
              "kind": "LinkedField",
              "name": "definition",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                (v2/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "orderingIdentifier",
                  "storageKey": null
                },
                (v5/*: any*/),
                (v6/*: any*/),
                (v7/*: any*/),
                (v0/*: any*/)
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "DescendantListTemplateInstanceSlots",
              "kind": "LinkedField",
              "name": "slots",
              "plural": false,
              "selections": (v9/*: any*/),
              "storageKey": null
            },
            (v10/*: any*/)
          ],
          "type": "DescendantListTemplateInstance",
          "abstractKey": null
        }
      ],
      "args": null,
      "argumentDefinitions": []
    }
  ],
  "type": "AnyMainTemplateInstance",
  "abstractKey": "__isAnyMainTemplateInstance"
};
})();

(node as any).hash = "e1fd70e793a5133ccd02a70f9e71a85c";

export default node;
