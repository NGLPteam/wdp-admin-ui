/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DashboardInstallationFragment = {
    readonly communities: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly contributors: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly users: {
        readonly pageInfo: {
            readonly totalCount: number;
        };
    };
    readonly " $refType": "DashboardInstallationFragment";
};
export type DashboardInstallationFragment$data = DashboardInstallationFragment;
export type DashboardInstallationFragment$key = {
    readonly " $data"?: DashboardInstallationFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DashboardInstallationFragment">;
};



const node: ReaderFragment = (function(){
var v0 = [
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
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DashboardInstallationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CommunityConnection",
      "kind": "LinkedField",
      "name": "communities",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "AnyContributorConnection",
      "kind": "LinkedField",
      "name": "contributors",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "UserConnection",
      "kind": "LinkedField",
      "name": "users",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'f681b51cb98a232391bc5af8a60e2d6f';
export default node;