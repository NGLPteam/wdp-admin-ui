/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityLinksListFragment = {
    readonly slug?: string;
    readonly links?: {
        readonly " $fragmentRefs": FragmentRefs<"EntityLinksListDataFragment">;
    };
    readonly " $refType": "EntityLinksListFragment";
};
export type EntityLinksListFragment$data = EntityLinksListFragment;
export type EntityLinksListFragment$key = {
    readonly " $data"?: EntityLinksListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityLinksListFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
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
    "concreteType": "EntityLinkConnection",
    "kind": "LinkedField",
    "name": "links",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "EntityLinksListDataFragment"
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityLinksListFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Item",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Collection",
      "abstractKey": null
    }
  ],
  "type": "AnyEntity",
  "abstractKey": "__isAnyEntity"
};
})();
(node as any).hash = '6602b9e8c2e706cef493f2db8df3d904';
export default node;
