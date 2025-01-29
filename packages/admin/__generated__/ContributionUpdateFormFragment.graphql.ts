/**
 * @generated SignedSource<<9bd672bbab95d241c6f930c32227397c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContributionUpdateFormFragment$data = {
  readonly __typename: "CollectionContribution";
  readonly collection: {
    readonly title: string;
  };
  readonly contributionId: string;
  readonly contributionRole: {
    readonly id: string;
    readonly label: string;
  };
  readonly contributor: {
    readonly __typename: "OrganizationContributor";
    readonly legalName: string | null | undefined;
    readonly slug: string;
  } | {
    readonly __typename: "PersonContributor";
    readonly familyName: string | null | undefined;
    readonly givenName: string | null | undefined;
    readonly slug: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly " $fragmentSpreads": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
  readonly " $fragmentType": "ContributionUpdateFormFragment";
} | {
  readonly __typename: "ItemContribution";
  readonly contributionId: string;
  readonly contributionRole: {
    readonly id: string;
    readonly label: string;
  };
  readonly contributor: {
    readonly __typename: "OrganizationContributor";
    readonly legalName: string | null | undefined;
    readonly slug: string;
  } | {
    readonly __typename: "PersonContributor";
    readonly familyName: string | null | undefined;
    readonly givenName: string | null | undefined;
    readonly slug: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly item: {
    readonly title: string;
  };
  readonly title: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionUpdateFormFieldsFragment">;
  readonly " $fragmentType": "ContributionUpdateFormFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "ContributionUpdateFormFragment";
};
export type ContributionUpdateFormFragment$key = {
  readonly " $data"?: ContributionUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContributionUpdateFormFragment">;
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
  "alias": "contributionId",
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "contributor",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "legalName",
          "storageKey": null
        }
      ],
      "type": "OrganizationContributor",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v2/*: any*/),
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
        }
      ],
      "type": "PersonContributor",
      "abstractKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
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
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "label",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ContributionUpdateFormFieldsFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContributionUpdateFormFragment",
  "selections": [
    (v0/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v1/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        (v6/*: any*/),
        (v7/*: any*/)
      ],
      "type": "CollectionContribution",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v1/*: any*/),
        (v3/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Item",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        },
        (v4/*: any*/),
        (v6/*: any*/),
        (v7/*: any*/)
      ],
      "type": "ItemContribution",
      "abstractKey": null
    }
  ],
  "type": "AnyContribution",
  "abstractKey": "__isAnyContribution"
};
})();

(node as any).hash = "878fdcf2064b4adcea2a477b7f86ff56";

export default node;
