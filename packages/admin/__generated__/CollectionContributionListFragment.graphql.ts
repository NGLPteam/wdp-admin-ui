/**
 * @generated SignedSource<<8176b81d4949daa647efa199caec00cc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionContributionListFragment$data = {
  readonly nodes: ReadonlyArray<{
    readonly collection: {
      readonly slug: string;
      readonly title: string;
    };
    readonly contributionRole: {
      readonly label: string;
    };
    readonly contributor: {
      readonly __typename: string;
      readonly familyName?: string | null | undefined;
      readonly givenName?: string | null | undefined;
      readonly legalName?: string | null | undefined;
      readonly slug?: string;
      readonly " $fragmentSpreads": FragmentRefs<"ContributorNameColumnFragment">;
    };
    readonly createdAt: string;
    readonly id: string;
    readonly position: number | null | undefined;
    readonly slug: string;
    readonly updatedAt: string;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"ModelListPageFragment">;
  readonly " $fragmentType": "CollectionContributionListFragment";
};
export type CollectionContributionListFragment$key = {
  readonly " $data"?: CollectionContributionListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionContributionListFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "legalName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "givenName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionContributionListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CollectionContribution",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "updatedAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "position",
          "storageKey": null
        },
        {
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
              "name": "label",
              "storageKey": null
            }
          ],
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
            (v1/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
                (v2/*: any*/)
              ],
              "type": "OrganizationContributor",
              "abstractKey": null
            },
            {
              "kind": "InlineFragment",
              "selections": [
                (v0/*: any*/),
                (v3/*: any*/),
                (v4/*: any*/)
              ],
              "type": "PersonContributor",
              "abstractKey": null
            },
            {
              "kind": "InlineDataFragmentSpread",
              "name": "ContributorNameColumnFragment",
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ImageAttachment",
                      "kind": "LinkedField",
                      "name": "image",
                      "plural": false,
                      "selections": [
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "AvatarFragment"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v0/*: any*/)
                      ],
                      "type": "Sluggable",
                      "abstractKey": "__isSluggable"
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v2/*: any*/)
                      ],
                      "type": "OrganizationContributor",
                      "abstractKey": null
                    },
                    {
                      "kind": "InlineFragment",
                      "selections": [
                        (v3/*: any*/),
                        (v4/*: any*/)
                      ],
                      "type": "PersonContributor",
                      "abstractKey": null
                    }
                  ],
                  "type": "Contributor",
                  "abstractKey": "__isContributor"
                }
              ],
              "args": null,
              "argumentDefinitions": []
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Collection",
          "kind": "LinkedField",
          "name": "collection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
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
      "name": "ModelListPageFragment"
    }
  ],
  "type": "CollectionContributionConnection",
  "abstractKey": null
};
})();

(node as any).hash = "8c8881f6f98d99e6c7f5597deeaeed6f";

export default node;
