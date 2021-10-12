/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EntityOrderingListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
        readonly slug: string;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "EntityOrderingListFragment";
};
export type EntityOrderingListFragment$data = EntityOrderingListFragment;
export type EntityOrderingListFragment$key = {
    readonly " $data"?: EntityOrderingListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"EntityOrderingListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityOrderingListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Ordering",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
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
  "type": "OrderingConnection",
  "abstractKey": null
};
(node as any).hash = 'b4f313b88b62ee74fd83326623c22c11';
export default node;
