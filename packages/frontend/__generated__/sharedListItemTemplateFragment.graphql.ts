/**
 * @generated SignedSource<<2a7611f1a4ab0fb5964826e1f80acd75>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type sharedListItemTemplateFragment$data = {
  readonly entity: {
    readonly __typename: "Collection";
    readonly contributors: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly heroImage: {
      readonly image: {
        readonly webp: {
          readonly alt: string | null | undefined;
          readonly url: string | null | undefined;
        };
      };
    };
    readonly id: string;
    readonly slug: string;
    readonly thumbnail: {
      readonly image: {
        readonly webp: {
          readonly url: string | null | undefined;
        };
      };
      readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
    };
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
  } | {
    readonly __typename: "Item";
    readonly contributors: {
      readonly pageInfo: {
        readonly totalCount: number;
      };
    };
    readonly heroImage: {
      readonly image: {
        readonly webp: {
          readonly alt: string | null | undefined;
          readonly url: string | null | undefined;
        };
      };
    };
    readonly id: string;
    readonly slug: string;
    readonly thumbnail: {
      readonly image: {
        readonly webp: {
          readonly url: string | null | undefined;
        };
      };
      readonly " $fragmentSpreads": FragmentRefs<"CoverImageFragment">;
    };
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"ContributorsListFragment">;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly slots: {
    readonly contextAbbr: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly contextC: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly contextFull: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly description: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedBlockSlotFragment">;
    } | null | undefined;
    readonly header: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly metaA: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly metaB: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
    readonly subheader: {
      readonly " $fragmentSpreads": FragmentRefs<"sharedInlineSlotFragment">;
    } | null | undefined;
  };
  readonly " $fragmentType": "sharedListItemTemplateFragment";
};
export type sharedListItemTemplateFragment$key = {
  readonly " $data"?: sharedListItemTemplateFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"sharedListItemTemplateFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v1 = [
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
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
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
    "concreteType": "ImageAttachment",
    "kind": "LinkedField",
    "name": "thumbnail",
    "plural": false,
    "selections": [
      {
        "alias": "image",
        "args": null,
        "concreteType": "ImageSize",
        "kind": "LinkedField",
        "name": "large",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageDerivative",
            "kind": "LinkedField",
            "name": "webp",
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CoverImageFragment"
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AnyContributorConnection",
    "kind": "LinkedField",
    "name": "contributors",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PageInfo",
        "kind": "LinkedField",
        "name": "pageInfo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
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
    "name": "ContributorsListFragment"
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
        "alias": "image",
        "args": null,
        "concreteType": "ImageSize",
        "kind": "LinkedField",
        "name": "large",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ImageDerivative",
            "kind": "LinkedField",
            "name": "webp",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "alt",
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v2 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "sharedInlineSlotFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "sharedListItemTemplateFragment",
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
          "selections": (v1/*: any*/),
          "type": "Collection",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": (v1/*: any*/),
          "type": "Item",
          "abstractKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ListItemTemplateInstanceSlots",
      "kind": "LinkedField",
      "name": "slots",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "contextFull",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "contextAbbr",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "contextC",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotBlockInstance",
          "kind": "LinkedField",
          "name": "description",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "sharedBlockSlotFragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "header",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "metaA",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "metaB",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TemplateSlotInlineInstance",
          "kind": "LinkedField",
          "name": "subheader",
          "plural": false,
          "selections": (v2/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ListItemTemplateInstance",
  "abstractKey": null
};
})();

(node as any).hash = "61ae4ff0353d4ee68a9997337b021494";

export default node;
