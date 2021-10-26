/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserListFragment = {
    readonly nodes: ReadonlyArray<{
        readonly email: string | null;
        readonly globalAdmin: boolean;
        readonly name: string | null;
        readonly slug: string;
        readonly createdAt: string;
        readonly updatedAt: string;
        readonly " $fragmentRefs": FragmentRefs<"UserNameColumnCellFragment">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ModelListPageFragment">;
    readonly " $refType": "UserListFragment";
};
export type UserListFragment$data = UserListFragment;
export type UserListFragment$key = {
    readonly " $data"?: UserListFragment$data;
    readonly " $fragmentRefs": FragmentRefs<"UserListFragment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserListFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "globalAdmin",
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
        },
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "UserNameColumnCellFragment"
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
  "type": "UserConnection",
  "abstractKey": null
};
(node as any).hash = 'aa16d3350e312cfe95738d703fdc1577';
export default node;
